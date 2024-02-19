const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Accounting" },
        { name: "Communication" },
        { name: "Computer Science" },
        { name: "Design" },
        { name: "Engineering" },
        { name: "Fitness" },
        { name: "Leadership" },
        { name: "Marketing" },
        { name: "Music" },
        { name: "Photography" },
        { name: "Project Management" },
      ],
    });

    console.log("success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await db.$disconnect();
  }
}

main();
