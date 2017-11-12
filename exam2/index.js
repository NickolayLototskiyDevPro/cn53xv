const ProjectModule = (function() {
  const project = {
    participants: [],
    pricing: {},
    isBusy: false,

    init(participants, pricing) {
      if (Array.isArray(participants) && participants.every(item => item.hasOwnProperty('seniorityLevel'))) {
        this.participants = participants;
      }
      if (typeof pricing === 'object') {
        this.pricing = pricing;
      }
    },

    findParticipant(functor, callbackFunction) {
      this.isBusy = true;
      setTimeout(() => {
        let participant = this.participants.find(functor);
        if (participant === undefined) {
          participant = null;
        }
        this.isBusy = false;
        callbackFunction(participant);
      });
    },

    findParticipants(functor, callbackFunction) {
      this.isBusy = true;
      setTimeout(() => {
        let participants = this.participants.filter(functor);
        if (participants === undefined) {
          callbackFunction([]);
        }
        project.isBusy = false;
        callbackFunction(participants);
      });
    },

    addParticipant(participantObject, callbackFunction) {
      this.isBusy = true;
      setTimeout(() => {
        try {
          if (participantObject.hasOwnProperty('seniorityLevel')) {
            this.participants.push(participantObject);
            project.isBusy = false;
            callbackFunction();
          } else {
            project.isBusy = false;
            throw new Error('error');
          }
        } catch (err) {
          callbackFunction(err);
        }
      });
    },

    removeParticipant(participantObject, callbackFunction) {
      this.isBusy = true;
      setTimeout(() => {
        let index = this.participants.indexOf(participantObject);
        if (index === -1) {
          project.isBusy = false;
          callbackFunction(null);
        } else {
          project.isBusy = false;
          callbackFunction(this.participants.splice(index, 1)[0]);
        }
      });
    },

    setPricing(participantPriceObject, callbackFunction) {
      this.isBusy = true;
      setTimeout(() => {
        Object.assign(this.pricing, participantPriceObject);
        project.isBusy = false;
        callbackFunction();
      });
    },

    calculateSalary(periodInDays) {
      if (typeof periodInDays === 'number') {
        let res = this.participants.reduce((res, i) => {
          return res += this.pricing[i.seniorityLevel] * periodInDays * 8;
        }, 0);
        if (!isNaN(res)) {
          return res;
        } else {
          throw new Error('err');
        }
      }
    }
  };

  let instance,
    createInstance = () => project,
    getInstance = () => instance || (instance = createInstance());

  return getInstance();
})();

module.exports = {
  firstName: 'Mihaylo',
  lastName: 'Merezhko',
  task: ProjectModule
};