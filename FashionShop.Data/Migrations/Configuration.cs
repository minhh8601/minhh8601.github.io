namespace FashionShop.Data.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Model.Models;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity.Migrations;
    using System.Data.Entity.Validation;
    using System.Diagnostics;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<FashionShop.Data.FashionShopDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(FashionShop.Data.FashionShopDbContext context)
        {

            CreateProductCategorySample(context);
            CreateContactDetail(context);
            ///  This method will be called after migrating to the latest version.

            //var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new FashionShopDbContext()));

            //var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(new FashionShopDbContext()));

            //var user = new ApplicationUser()
            //{
            //    UserName = "nghia",
            //    Email = "nghiadv1006@gmail.com",
            //    EmailConfirmed = true,
            //    BirthDay = DateTime.Now,
            //    FullName = "Đỗ Văn Nghĩa"

            //};

            //manager.Create(user, "123654$");

            //if (!roleManager.Roles.Any())
            //{
            //    roleManager.Create(new IdentityRole { Name = "Admin" });
            //    roleManager.Create(new IdentityRole { Name = "User" });
            //}

            //var adminUser = manager.FindByEmail("nghiadv1006@gmail.com");

            //manager.AddToRoles(adminUser.Id, new string[] { "Admin", "User" });

        }

        private void CreateProductCategorySample(FashionShop.Data.FashionShopDbContext context)
        {
            if (context.ProductCategories.Count() == 0)
            {
                List<ProductCategory> listProductCategory = new List<ProductCategory>()
            {
                new ProductCategory() { Name="Áo sơ mi",Alias="ao-so-mi",Status=true },
                 new ProductCategory() { Name="Áo khoác",Alias="ao-khoac",Status=true },
                  new ProductCategory() { Name="Áo len",Alias="ao-len",Status=true },
                   new ProductCategory() { Name="Áo phông",Alias="ao-phong",Status=true }
            };
                context.ProductCategories.AddRange(listProductCategory);
                context.SaveChanges();
            }

        }

        private void CreateContactDetail(FashionShopDbContext context)
        {
            if (context.ContactDetails.Count() == 0)
            {
                try
                {
                    var contactDetail = new FashionShop.Model.Models.ContactDetail()
                    {
                        Name = "Shop thời trang Fashion",
                        Address = "Yên Mỹ Hưng Yên",
                        Email = "nghiadv1006@gmail.com",
                        Lat = 20.9024214,
                        Lng = 106.0489015,
                        Phone = "0333749728",
                        Website = "http://fashionshop.com.vn",
                        Other = "",
                        Status = true
                    };
                    context.ContactDetails.Add(contactDetail);
                    context.SaveChanges();
                }
                catch (DbEntityValidationException ex)
                {
                    foreach (var eve in ex.EntityValidationErrors)
                    {
                        Trace.WriteLine($"Entity of type \"{eve.Entry.Entity.GetType().Name}\" in state \"{eve.Entry.State}\" has the following validation error.");
                        foreach (var ve in eve.ValidationErrors)
                        {
                            Trace.WriteLine($"- Property: \"{ve.PropertyName}\", Error: \"{ve.ErrorMessage}\"");
                        }
                    }
                }

            }
        }
    }
}
