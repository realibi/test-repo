let desktop = [
    {
        name: "Folder 1",
        folders: [
            {name: "Subfolder 1"},
            {name: "Subfolder 2"},
            {name: "Subfolder 3"},
        ]
    },
    {
        name: "Folder 2",
        folders: [
            {name: "Subfolder 4"},
            {name: "Subfolder 5"},
            {name: "Subfolder 6"},
        ]
    },
    {
        name: "Folder 3",
        folders: [
            {name: "Subfolder 7"},
            {name: "Subfolder 8"},
            {name: "Subfolder 9"},
        ]
    },
];

function showParentFolderName(subfolderName){
    for(let folder of desktop){
        for(let subFolder of folder.folders){
            if(subFolder.name === subfolderName){
                console.log(folder.name);
                break;
            }
        }
    }
}

showParentFolderName("Subfolder 5");