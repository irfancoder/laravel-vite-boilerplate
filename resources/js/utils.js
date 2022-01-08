import fs from "fs";

const getFiles = (dir, files_) => {
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files) {
        var name = dir + "/" + files[i];
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
};

// Export chunk
export const chunkComponentsBySubdir = (folder, subfolder) => {
    return getFiles(`./resources/js/${folder}/${subfolder}/`);
};

export default null;
