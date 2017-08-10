import {submitDone} from '/state-functions.js';

test('submitDone submits contact info to email', ()=> {
  const startState = {
    contactInfo: [{lastName: '', firstName: '', email: '', phoneNumber: '', mentor: false, instructor: false, volunteer: false, interestedGirl: false,
    }]
  };

  const finState = submitDone(startState, 1);

  expect(finState.contactInfo).toEqual([
    {lastName: 'Smith', firstName: 'Jane', email: 'jsmith@gmail.com', phoneNumber: 4055347777, mentor: false, instructor: false, volunteer: false, interestedGirl: true}
  ]);
});
