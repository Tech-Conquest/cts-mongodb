db = new Mongo().getDB("loggerDB");
db.createUser(
    {
        user: "logappuser",
        pwd: "password123",
        roles: [
            {
                role: "readWrite",
                db: "loggerDB"
            }
        ]
    }
);

db.createCollection('ConnectionLog', { capped: false });
db.createCollection('AppLogs', { capped: false });