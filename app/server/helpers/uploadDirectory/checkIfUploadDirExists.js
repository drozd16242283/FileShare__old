import pathExists                   from 'path-exists'

import currentPathToUploadDirectory from './getPathToUploadDir'
import createUploadDirectory        from './createUploadDirectory'


/**
 *  This function is checking if upload directory exists.
 *  If not, it creates them.
 */
let checkIfUploadDirectoryExists = () => {
    pathExists(currentPathToUploadDirectory).then(exists => {
        if (!exists) {
            createUploadDirectory();
        } 
    })
}

export default checkIfUploadDirectoryExists
