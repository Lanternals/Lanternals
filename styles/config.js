/* ------------------------------------------------------------------- */
/* Sheet ID
/* Your sheet ID
/* ------------------------------------------------------------------- */
let sheetID = "1bKw3I2_C7YZtmzDHXjZrciYou3N0RE7IVZJ2MS9F5_E";


/* ------------------------------------------------------------------- */
/* All sheet pages
/* ------------------------------------------------------------------- */
let sheetPages = {

    masterlist: "masterlist",
    masterlistLog: "masterlist log",
    inventory: "inventory",
    inventoryLog: "inventory log",
    items: "items",
    traits: "traits",
    prompts: "prompts",
    faq: "faq",
    staff: "mods",
    traitinv: "trait inv",

}


/* ------------------------------------------------------------------- */
/* All Site Options
/* ------------------------------------------------------------------- */
let options = {


    /* Index
    /* --------------------------------------------------------------- */
    index: {

        promptSheetPage: sheetPages.prompts,
        numOfPrompts: 3,

        staffSheetPage: sheetPages.staff,
        numOfStaff: 8,

        masterlistSheetPage: sheetPages.masterlist,
        numOfDesigns: 4,
    
    },


    /* Masterlist
    /* --------------------------------------------------------------- */
    masterlist: {

        sheetPage: sheetPages.masterlist,
        logSheetPage: sheetPages.masterlistLog,

        itemAmount: 12,
        itemOrder: "asc",

        filterColumn: 'Design Type',
        searchFilterParams: ['ID', 'Owner', 'Designer', 'Artist'],
        fauxFolderColumn: 'Species',

    },


    /* Item Catalogue
    /* --------------------------------------------------------------- */
    items: {

        sheetPage: sheetPages.items,
    
        itemAmount: 24,
        itemOrder: "asc",
    
        filterColumn: 'Rarity',
        searchFilterParams: ['Item'],
        fauxFolderColumn: 'Type',
    
    },


    /* Invetory
    /* --------------------------------------------------------------- */
    inventory: {

        sheetPage: sheetPages.inventory,
        itemSheetPage: sheetPages.items,
        logSheetPage: sheetPages.inventoryLog,

         itemAmount: 24,
        sortTypes: ['Currency', 'Upgrade', 'Redesign', ],

         searchFilterParams: ['Username'],
    },
    
     traitinv: {    
        sheetPage: sheetPages.traitinv,
        traitsSheetPage: sheetPages.traits,
        logSheetPage: sheetPages.inventorylog,

         traitsAmount: 24,
        sortTypes: ['Lanternal', 'Grimhalla', 'Both', ],
        
        searchFilterParams: ['Username'],
    
    },


    /* Prompts
    /* --------------------------------------------------------------- */
    prompts: {
    
        sheetPage: sheetPages.prompts,

        itemAmount: 24,
        itemOrder: "desc",

        searchFilterParams: ['Title'],
    
    },


    /* Traits
    /* --------------------------------------------------------------- */
    traits: {
    
        sheetPage: sheetPages.traits,

        itemAmount: 24,
        itemOrder: "asc",

        filterColumn: 'Rarity',
        searchFilterParams: ['Trait'],
        fauxFolderColumn: 'Type',
    
    },


    /* Staff
    /* --------------------------------------------------------------- */
    staff: {
    
        sheetPage: sheetPages.staff,
    
    },


    /* FAQ
    /* --------------------------------------------------------------- */
    faq: {
    
        sheetPage: sheetPages.faq,
    
        itemAmount: 24,
        itemOrder: "asc",
    
        searchFilterParams: ['Tags'],
    
    },


}
