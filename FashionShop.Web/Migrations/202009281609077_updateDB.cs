namespace FashionShop.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class updateDB : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Products", "Type", c => c.Boolean(nullable: false));
            DropColumn("dbo.Products", "Warranty");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Products", "Warranty", c => c.Int());
            DropColumn("dbo.Products", "Type");
        }
    }
}
