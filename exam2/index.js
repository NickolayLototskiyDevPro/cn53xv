/* { firstName: 'Sergey', lastName: 'Zotenko', seniorityLevel: 'intermediate' } */

const participantObject = {
  firstName: string,
  lastName: string,
  seniorityLevel: string
}

/* { 'junior': 10 } */
const pricingObject = {
  roleName: number
}

const project = {
   participants: [],
   pricing: { },
   isBusy: boolean,

   // устанавливает значения объекта
   init(participants, pricing) { },

   // поиск  1 подходящего участника
   findParticipant(functor, callbackFunction) { },

   // поиск всех участников
   findParticipants(functor, callbackFunction) { },

   // добавляет участника
   addParticipant(participantObject, callbackFunction) { },

   // удаляет объект участника
   removeParticipant(participantObject, callbackFunction) { },

   // устанавливает значение поля
   setPricing(participantPriceObject, callbackFunction) { },

   // возвращает зарплату участника за 8 часов
   calculateSalary(periodInDays) { }
}

module.exports = {
   firstName: 'Mihaylo',
   lastName: 'Merezhko',
   task: ProjectModule
}