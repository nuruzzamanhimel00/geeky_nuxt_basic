//with  provide key
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      odd: (number) => {
        let numberArray = [];
        for (let i = 0; i <= number; i++) {
          if (i % 2 !== 0) {
            numberArray.push(i);
          }
        }
        return numberArray;
      },
    },
  };
});
