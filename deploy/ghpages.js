import path from 'path'
import ghPages from 'gh-pages'
import {fileURLToPath} from 'url'

const options = {
    branch: 'gh-pages',
    repo: 'https://github.com/iq50632/test.git' // project github repo
};

const callback = err => {
    if (err) console.error(err);
    else console.log('publish success');
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * This task pushes to the `master` branch of the configured `repo`.
 */
ghPages.publish(path.resolve(__dirname, '../dist'), options, callback);