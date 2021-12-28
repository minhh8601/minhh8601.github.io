namespace FashionShop.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class updateType : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Products", "Type", c => c.String(maxLength: 5));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Products", "Type", c => c.String(nullable: false, maxLength: 5));
        }
    }
}
