import User from '../schemas/user';
import bcrypt from "bcryptjs";

const dbSeed = {
  async seed() {
    try {
      const users = [
        {
          model: User,
          data: async () => [
            {
              name: "Admin",
              email: "admin@codesentry.org",
              password: bcrypt.hashSync("admin", 10),
              role: "admin",
              status: "active",
              firstLogin: false,
            },
            {
              name: "Jane Smith",
              email: "jane.smith@codesentry,org",
              password: bcrypt.hashSync("admin", 10),
              role: "reporter",
              status: "active",
              firstLogin: false,
            },
            {
              name: "John Doe",
              email: "john@doe@codesentry.org",
              password: bcrypt.hashSync("admin", 10),
              role: "developer",
              status: "active",
              firstLogin: false,
            },
            // {
            //   name: "John Doe",
            //   email: "john.doe@codesentry.org",
            //   password: bcrypt.hashSync("john.doe", 10),
            //   role: "reporter",
            //   firstLogin: false,
            // },
            // {
            //   name: "Jane Smith",
            //   email: "jane.smith@codesentry.org",
            //   password: bcrypt.hashSync("jane.smith", 10),
            //   role: "developer",
            //   firstLogin: false,
            // },
          ],
        },
      ];

      
      for (const user of users) {
        console.log('');
        console.log(`Seeding ${user.data.name}...`);
        try {
          const count = await user.model.countDocuments();
          const data = await user.data();

          if (count < data.length) {
            await Promise.all(
              data.map(async (item) => {
                try {
                  await user.model.create(item);
                  console.log(`-- ${item.name} seeded`);
                } catch (error) {
                  console.log(error)
                }
              })
            )
          }

          console.log('-- data count:', data.length);
        } catch (error) {
          
        }
      }
    } catch (error) {
      console.log(error)
    }  
  }
}

export default dbSeed;