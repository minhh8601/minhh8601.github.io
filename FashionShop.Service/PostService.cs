using FashionShop.Data.Infrastructure;
using FashionShop.Data.Repositories;
using FashionShop.Model.Models;
using System.Collections.Generic;
using System;
using System.Linq;
using FashionShop.Common;

namespace FashionShop.Service
{
    public interface IPostService
    {
        Post Add(Post Post);

        void Update(Post Post);

        Post Delete(int id);

        IEnumerable<Post> GetAll();

        IEnumerable<Post> GetAll(string keyword);

        IEnumerable<Post> GetLastest(int top);

        IEnumerable<Post> Search(string keyword, int page, int pageSize, string sort, out int totalRow);

        IEnumerable<Post> GetListPost(int page, int pageSize, out int totalRow);

        IEnumerable<Post> GetListPost(string keyword);

        IEnumerable<Post> GetReatedPosts(int id, int top);

        IEnumerable<Post> GetHotPosts(int id, int top);

        IEnumerable<string> GetListPostByName(string name);

        Post GetById(int id);

        void Save();

        IEnumerable<Tag> GetListTagByPostId(int id);

        Tag GetTag(string tagId);

        void IncreaseView(int id);

        IEnumerable<Post> GetListPostByTag(string tagId, int page, int pagesize, out int totalRow);
       
    }

    public class PostService : IPostService
    {
        private IPostRepository _postRepository;
        private ITagRepository _tagRepository;
        private IPostTagRepository _postTagRepository;
        private IUnitOfWork _unitOfWork;    

        public PostService(IPostRepository postRepository, IPostTagRepository postTagRepository,
            ITagRepository _tagRepository, IUnitOfWork unitOfWork)
        {
            this._postRepository = postRepository;
            this._postTagRepository = postTagRepository;
            this._tagRepository = _tagRepository;
            this._unitOfWork = unitOfWork;
        }

        public Post Add(Post Post)
        {
            return _postRepository.Add(Post);
        }

        public Post Delete(int id)
        {
            return _postRepository.Delete(id);
        }

        public IEnumerable<Post> GetAll()
        {
            return _postRepository.GetAll();
        }

        public IEnumerable<Post> GetAll(string keyword)
        {
            if (!string.IsNullOrEmpty(keyword))
                return _postRepository.GetMulti(x => x.Name.Contains(keyword) || x.Description.Contains(keyword));
            else
                return _postRepository.GetAll();
        }

        public Post GetById(int id)
        {
            return _postRepository.GetSingleById(id);
        }

        public IEnumerable<Post> GetHotPosts(int id, int top)
        {
            return _postRepository.GetMulti(x => x.Status && x.HotFlag == true).OrderByDescending(x => x.CreatedDate).Take(top);
        }

        public IEnumerable<Post> GetLastest(int top)
        {
            return _postRepository.GetMulti(x => x.Status).OrderByDescending(x => x.CreatedDate).Take(top);
        }

        public IEnumerable<Post> GetListPost(string keyword)
        {
            IEnumerable<Post> query;
            if (!string.IsNullOrEmpty(keyword))
                query = _postRepository.GetMulti(x => x.Name.Contains(keyword));
            else
                query = _postRepository.GetAll();
            return query;
        }

        public IEnumerable<string> GetListPostByName(string name)
        {
            return _postRepository.GetMulti(x => x.Status && x.Name.Contains(name)).Select(y => y.Name);
        }

        public IEnumerable<Post> GetListPostByTag(string tagId, int page, int pageSize, out int totalRow)
        {
            var model = _postRepository.GetListPostByTag(tagId, page, pageSize, out totalRow);
            return model;
        }

        public IEnumerable<Tag> GetListTagByPostId(int id)
        {
            return _postTagRepository.GetMulti(x => x.PostID == id, new string[] { "Tag" }).Select(y => y.Tag);
        }

        public IEnumerable<Post> GetReatedPosts(int id, int top)
        {
            var product = _postRepository.GetSingleById(id);
            return _postRepository.GetMulti(x => x.Status && x.ID != id && x.CategoryID == product.CategoryID ).OrderByDescending(x => x.CreatedDate).Take(top);
        }

        public Tag GetTag(string tagId)
        {
            return _tagRepository.GetSingleByCondition(x => x.ID == tagId);
        }

        public void IncreaseView(int id)
        {
            var product = _postRepository.GetSingleById(id);
            if (product.ViewCount.HasValue)
                product.ViewCount += 1;
            else
                product.ViewCount = 1;
        }

        public void Save()
        {
            _unitOfWork.Commit();
        }

        public IEnumerable<Post> Search(string keyword, int page, int pageSize, string sort, out int totalRow)
        {
            var query = _postRepository.GetMulti(x => x.Status && x.Name.Contains(keyword));           

            totalRow = query.Count();

            return query.Skip((page - 1) * pageSize).Take(pageSize);
        }

        public void Update(Post Post)
        {
            _postRepository.Update(Post);
        }

        public IEnumerable<Post> GetListPost(int page, int pageSize, out int totalRow)
        {
            var query = _postRepository.GetMulti(x => x.Status).OrderByDescending(x=>x.CreatedDate);

            totalRow = query.Count();

            return query.Skip((page - 1) * pageSize).Take(pageSize);
        }
    }
}
