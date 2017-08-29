import { TimelineMax } from 'gsap';

export const SubmitAni = () => {
  const SubmitAni = new TimelineMax();
  SubmitAni.to('.contactUs', .5, {width:0})
           .to('.EmailConfirm', 1, {width: '100%'}, '-=1')
}
