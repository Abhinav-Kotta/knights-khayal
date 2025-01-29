const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function createVideo() {
  try {
    const video = await prisma.video.create({
      data: {
        title: 'Jax Set',
        description: 'This is a sample video',
        driveUrl: 'https://drive.google.com/file/d/1K7PG-MmgjUrYqXdXOZoBTQIUnYnl-XVz/view?usp=sharing',
        category: 'Performance',
        featured: true,
        date: new Date(),
      },
    });

    console.log('Created video:', video);
  } catch (error) {
    console.error('Error creating video:', error);
  }
}

async function createAdminUser() {
  try {
    const hashedPassword = await bcrypt.hash('your-admin-password', 10);
    
    const user = await prisma.user.create({
      data: {
        email: 'admin@example.com',
        password: hashedPassword,
        isAdmin: true,
      },
    });
    console.log('Admin user created:', user);
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (command === 'create-video') {
    await createVideo();
  } else if (command === 'create-admin') {
    await createAdminUser();
  } else {
    console.log('Invalid command. Available commands: create-video, create-admin');
  }

  await prisma.$disconnect();
}

main().catch((error) => {
  console.error('Error:', error);
});