const equipements = {
    salleDeBain: {
      id: "salleDeBain",
      label: "Salle de Bain",
      items: [
        { name: "Sèche cheveux", icon: "mdi-hair-dryer", available: true, ask: false },
        { name: "Shampooing", icon: "mdi-hand-wash", available: true, ask: false },
        { name: "Gel douche", icon: "mdi-hand-wash", available: true, ask: false },
        { name: "Savon", icon: "mdi-lotion", available: true, ask: false },
        { name: "Eau chaude", icon: "mdi-water-thermometer", available: true, ask: false }
      ]
    },
    buanderie: {
      id: "buanderie",
      label: "Buanderie",
      items: [
        { name: "Lave linge", icon: "mdi-washing-machine", available: true, ask: false },
        { name: "Sèche linge", icon: "mdi-washing-machine", available: false, ask: false },
        { name: "Fer à repasser", icon: "mdi-iron", available: true, ask: false },
        { name: "Cintres", icon: "mdi-hanger", available: true, ask: false }
      ]
    },
    chambre: {
      id: "chambre",
      label: "Chambre",
      items: [
        { name: "Draps", icon: "mdi-bed", available: true, ask: false },
        { name: "Lit pour bébé", icon: "mdi-cradle", available: false, ask: false }
      ]
    },
    securiteEtConfort: {
      id: "securiteEtConfort",
      label: "Sécurité et Confort",
      items: [
        { name: "Kit de premier secours", icon: "mdi-medication", available: true, ask: false },
        { name: "Détecteur de fumée", icon: "mdi-smoke-detector", available: true, ask: false },
        { name: "Climatisation", icon: "mdi-air-conditioner", available: false, ask: false },
        { name: "Chauffage", icon: "mdi-radiator", available: true, ask: false }
      ]
    },
    cuisine: {
      id: "cuisine",
      label: "Cuisine",
      items: [
        { name: "Micro-ondes", icon: "mdi-microwave", available: true, ask: false },
        { name: "Four", icon: "mdi-stove", available: true, ask: false },
        { name: "Équipements de cuisine de base", icon: "mdi-silverware-spoon", available: true, ask: false },
        { name: "Vaisselle", icon: "mdi-bowl", available: true, ask: false },
        { name: "Lave vaisselle", icon: "mdi-dishwasher", available: true, ask: false },
        { name: "Bouilloire", icon: "mdi-kettle", available: true, ask: false },
        { name: "Cafetière (café moulu)", icon: "mdi-coffee-maker", available: true, ask: false },
        { name: "Grille pain", icon: "mdi-toaster", available: true, ask: false },
        { name: "Réfrigérateur", icon: "mdi-fridge", available: true, ask: false },
        { name: "Plaque de cuisson", icon: "mdi-stove", available: true, ask: false },
        { name: "Appareil à raclette", icon: "mdi-cheese", available: true, ask: true },
        { name: "Appareil à mini crêpes", icon: "mdi-sugar", available: true, ask: true }
      ]
    },
    divertissementEtCommunication: {
      id: "divertissementEtCommunication",
      label: "Divertissement et Communication",
      items: [
        { name: "Jeux de société", icon: "mdi-cards-playing", available: true, ask: true },
        { name: "Télévision", icon: "mdi-television", available: true, ask: false },
        { name: "Wifi", icon: "mdi-wifi", available: true, ask: false },
      ]
    },
    enfants: {
      id: "enfants",
      label: "Enfants",
      items: [
        { name: "Chaise haute", icon: "mdi-chair-school", available: true, ask: false },
        { name: "Livres et jouets pour enfants", icon: "mdi-book-open-page-variant", available: true, ask: true }
      ]
    },
    //exterieur: {
    //  id: "exterieur",
    //  label: "Extérieur",
    //  items: [
    //    { name: "Mobilier extérieur", icon: "mdi-outdoor-furniture", available: true, ask: false },
    //    { name: "Espace repas en plein air", icon: "mdi-outdoor-dining", available: true, ask: false },
    //    { name: "Terrasse", icon: "mdi-terrace", available: true, ask: false }
    //  ]
    //},
    stationnement: {
      id: "stationnement",
      label: "Stationnement",
      items: [
        { name: "Parking gratuit dans la rue", icon: "mdi-parking", available: true, ask: false },
        { name: "Parking privé intérieur", icon: "mdi-parking", available: true, ask: false }
      ]
    }
  };
  
export default equipements;