import {express } from 'express';
import {pkg } from 'body-parser';
import {router } from './routes/router.js';
import sequelize from './utils/database.js';    
import { association } from './models/Associations.js';


const app = express();
const {json, urlencoded} = pkg;

app.use(json());
app.use(urlencoded({extended : true}));

(async () => {
    try {
       association.association();
       await sequelize.sync();
       app.listen(3000, function () {
           console.log('Database connected successfully.');
       });
    } catch (error) {
       console.error('erro:', error);
    }
})();

app.listen(3000, function () {
    console.log(' liten from 3000')
});

app.use('/', router);
