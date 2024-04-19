import path from 'path'
import ghPages from 'gh-pages'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const options = {
    branch: 'gh-pages',
    repo: 'https://github.com/iq50632/test.git', // project github repo
    add: true,
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/test/'
}

const callback = err => {
    if (err) console.error(err)
    else console.log('publish success')
}

/**
 * This task pushes to the `master` branch of the configured `repo`.
 */
ghPages.publish(path.resolve(__dirname, '../dist'), options, callback)