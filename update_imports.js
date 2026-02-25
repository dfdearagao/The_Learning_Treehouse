const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let changed = false;
            
            // Handle ../types
            if (content.includes("from '../types'")) {
                content = content.replace(/from '\.\.\/types'/g, "from '../types/types'");
                changed = true;
            }
            if (content.includes("from '../types_BQ'")) {
                content = content.replace(/from '\.\.\/types_BQ'/g, "from '../types/types_BQ'");
                changed = true;
            }
            if (content.includes("from '../types_SP'")) {
                content = content.replace(/from '\.\.\/types_SP'/g, "from '../types/types_SP'");
                changed = true;
            }

            // Handle ../../types
            if (content.includes("from '../../types'")) {
                content = content.replace(/from '\.\.\/\.\.\/types'/g, "from '../../types/types'");
                changed = true;
            }
            if (content.includes("from '../../types_BQ'")) {
                content = content.replace(/from '\.\.\/\.\.\/types_BQ'/g, "from '../../types/types_BQ'");
                changed = true;
            }
            if (content.includes("from '../../types_SP'")) {
                content = content.replace(/from '\.\.\/\.\.\/types_SP'/g, "from '../../types/types_SP'");
                changed = true;
            }

            if (changed) {
                fs.writeFileSync(fullPath, content);
                console.log('Updated ' + fullPath);
            }
        }
    }
}

processDir('./components');
processDir('./math');
processDir('./reading');
processDir('./science');
processDir('./socialStudies');
