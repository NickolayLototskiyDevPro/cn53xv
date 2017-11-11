const ProjectModule = (function() {
  let participants = [],
      pricing = {},
      isBusy = false;

  init = (participants) => {
    let participantObject = Object.create(null, {
      firstName: {
        enumerable: true,
        value: participants[0]
      },
      lastName: {
        enumerable: true,
        value: participants[1]
      },
      seniorityLevel: {
        enumerable: true,
        value: participants[2]
      }
    });

    return participantObject;
  },
    
  findParticipant = (functor, callbackFunction) => {
    functor = (arr, key, value) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][key] === value) {
          return arr[i];
        }
      }
      return null;
    }

    return callbackFunction = functor(participants, 'firstName', 'Sergey');
  },
   
  findParticipants = (functor, callbackFunction) => {
    let res = [];
    functor = (arr, key, value) => {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j][key] === value) {
          res.push(arr[j]);
        }
      }
      return res;
    }

    return callbackFunction = functor(participants, 'seniorityLevel', 'senior');
  },
   
  addParticipant = (participantObject, callbackFunction) => {
    callbackFunction = (key) => {
      if (key.seniorityLevel) {
        participants.push(key);
      } else {
        return new Error();
      }
    }

    participantObject.map(callbackFunction);
    return participants;
  }
  
  removeParticipant = (participantObject, callbackFunction) => {
    return participants.splice(0, 1);
  }
  
  setPricing = (pricingObject, callbackFunction) => {
    pricingObject = new Object(pricingObject);
    return pricingObject;
  },
  
  calculateSalary = (obj, periodInDays) => {
    for (let key in obj) {
      return obj[key] *= periodInDays;
    }
  }

  const createInstance = () => {
    return {
      init: init,
      findParticipant: findParticipant,
      findParticipants: findParticipants,
      addParticipant: addParticipant,
      removeParticipant: removeParticipant,
      setPricing: setPricing,
      calculateSalary: calculateSalary
    }
  }

  return {
    getInstance: function() {
      return isBusy || (isBusy = createInstance());
    }
  }
})();

let junior = ProjectModule.getInstance().setPricing({ 'junior': 10 });
console.log(junior);
let days = ProjectModule.getInstance().calculateSalary(junior, 8);
console.log(days);

module.exports = {
  firstName: 'Mihaylo',
  lastName: 'Merezhko',
  task: ProjectModule
}