namespace FashionShop.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addTypedb : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Products", "Type", c => c.String(nullable: false, maxLength: 5));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Products", "Type");
        }
    }
}
