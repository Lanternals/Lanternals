/* ------------------------------------------------------------------- */
/* Sheet ID
/* Your sheet ID
/* ------------------------------------------------------------------- */
let sheetID = "1bKw3I2_C7YZtmzDHXjZrciYou3N0RE7IVZJ2MS9F5_E";


/* ------------------------------------------------------------------- */
/* All sheet pages
/* ------------------------------------------------------------------- */
let sheetPages = {

    masterlist: "Masterlist",
    masterlistLog: "ML Log",
    inventory: "Inv",
    inventoryLog: "Inv Log",
     openadopts: "Open Adopts",
    pets: "Pets",
    petslog: "Pets Log",
    shop: "Shop",
market: "Market",
event: "Event Shop",
    adopt: "Adopt Shop",
    lanternaltraits: "LantTraits",
      grimtraits: "GrimTraits",
bestiary: "bestiary",
    prompts: "Prompts",
    faq: "faq",
    staff: "Mods",

}


/* ------------------------------------------------------------------- */
/* All Site Options
/* ------------------------------------------------------------------- */
let options = {


    /* Index
    /* --------------------------------------------------------------- */
    index: {

        promptSheetPage: sheetPages.prompts,
        numOfPrompts: 1,

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

       filterColumn: 'Subspecies',
        searchFilterParams: ['ID', 'Owner', 'Designer', 'Artist'],
        fauxFolderColumn: 'Design Type',

    },

     /* pets Masterlist
    /* --------------------------------------------------------------- */
    pets: {

        sheetPage: sheetPages.pets,
        logSheetPage: sheetPages.petslog,

        itemAmount: 12,
        itemOrder: "asc",

        fauxFolderColumn: 'Design Type',
        searchFilterParams: ['ID', 'Owner', 'Designer', 'Artist'],

    },

    /* Masterlist
    /* --------------------------------------------------------------- */
    openadopts: {

        sheetPage: sheetPages.openadopts,

        itemAmount: 12,
        itemOrder: "asc",

       filterColumn: 'Subspecies',
        searchFilterParams: ['ID', 'Owner', 'Designer', 'Artist'],
        fauxFolderColumn: 'Design Type',

    },

    /* shop Catalogue
    /* --------------------------------------------------------------- */
    shop: {

        sheetPage: sheetPages.shop,
    
        itemAmount: 24,
        itemOrder: "asc",
    
     fauxFolderColumn: 'Type',
        searchFilterParams: ['Item'],
    
    },

     /* market
    /* --------------------------------------------------------------- */
    market: {

        sheetPage: sheetPages.market,
    
        itemAmount: 24,
        itemOrder: "asc",
    
     fauxFolderColumn: 'Type',
        searchFilterParams: ['Item'],
    
    },


 /* event
    /* --------------------------------------------------------------- */
    event: {

        sheetPage: sheetPages.event,
    
        itemAmount: 24,
        itemOrder: "asc",
    
     fauxFolderColumn: 'Type',
        searchFilterParams: ['Item'],
    
    },


     /* adopt
    /* --------------------------------------------------------------- */
    adopt: {

        sheetPage: sheetPages.adopt,
    
        itemAmount: 24,
        itemOrder: "desc",
    
     fauxFolderColumn: 'Type',
        searchFilterParams: ['Item'],
    
    },




    /* Invetory
    /* --------------------------------------------------------------- */
         inventory: {

        sheetPage: sheetPages.inventory,
        shopSheetPage: sheetPages.shop,
        marketSheetPage: sheetPages.market,
  eventSheetPage: sheetPages.event,
              adoptSheetPage: sheetPages.adopt,
             lanternaltraitsSheetPage: sheetPages.lanternaltraits,
              grimtraitsSheetPage: sheetPages.grimtraits,
        logSheetPage: sheetPages.inventorylog,
    
        itemAmount: 24,
        sortTypes: ['Currency', 'Design Ticket', 'Upgrade', 'Redesign', 'Event', 'Trait'],
        
        searchFilterParams: ['Username'],
    
    },


    /* Prompts
    /* --------------------------------------------------------------- */
    prompts: {
    
        sheetPage: sheetPages.prompts,

        itemAmount: 12,
        itemOrder: "desc",

        searchFilterParams: ['Title'],
    
    },

     /* Traits
    /* --------------------------------------------------------------- */
    lanternaltraits: {
    
        sheetPage: sheetPages.lanternaltraits,

        itemAmount: 18,
        itemOrder: "asc",

        filterColumn: 'Rarity',
        searchFilterParams: ['Trait'],
        fauxFolderColumn: 'Type',
    
    },
    
  /* Traits
    /* --------------------------------------------------------------- */
    grimtraits: {
    
        sheetPage: sheetPages.grimtraits,

        itemAmount: 18,
        itemOrder: "asc",

        filterColumn: 'Rarity',
        searchFilterParams: ['Trait'],
        fauxFolderColumn: 'Type',
    
    },


    /* Pets
    /* --------------------------------------------------------------- */
    bestiary: {
    
        sheetPage: sheetPages.bestiary,

        itemAmount: 24,
        itemOrder: "asc",

        filterColumn: 'Rarity',
        searchFilterParams: ['species'],
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
