import { Sequelize } from "sequelize";

class Connection {
     db = null;

    async connect() {
        if (!!this.db) {
            return;
        } 

        try {
            this.db = new Sequelize(
                'popcars',
                'root',
                '', 
                {
                    host : 'localhost',
                    dialect : 'mariadb',
                    logging : false
                })

            await this.db.authenticate()
                .then(_ => console.log('Connexion à la base de données réussie'))
                .catch(error => console.error('Erreur de synchronisation', error));

   
            

        } catch (error) {
            console.error(error)
        }
    };

    async sync(){
    await this.db.sync(
       //{force:true}
    )

    }
}

const connexion = new Connection();
connexion.connect();


export default connexion; 