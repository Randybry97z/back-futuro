import { readdirSync } from 'fs';
import path from 'path';

const basename = path.basename(__filename);
const masterRouter = {};
readdirSync(__dirname).filter(file => {
  return (file.indexOf('.') !== 0) && (file !== basename && file !== '_auth.routes.js') && (file.slice(-3) === '.js');
}).map(file => {
  let prefix = file.replace('_', '').replace('.routes.js', 'Routes');
  const router = require(path.join(__dirname, file));
  masterRouter[prefix] = router;
  return router;
});

export default masterRouter;