import { capitalize, downTo } from './helpers';
class Bottles {
  song() {
    return this.verses(99, 0);
  }

  verses(...args) {
    const range = downTo(...args);

    return range.map(a => this.verse(a)).join('\n');
  }

  verse(count = 99) {
    const getBottles = () => {
      switch (count) {
        case 0:
          return 'no more bottles';
        case 1:
          return '1 bottle';
        default:
          return `${count} bottles`;
      }
    };

    const getWhatYoureTaking = () => {
      switch (count) {
        case 0:
          count = 100;
          return `Go to the store and buy some more`;
        case 1:
          return `Take it down and pass it around`;
        default:
          return `Take one down and pass it around`;
      }
    };

    const getHowManyLeft = (newCount = count) => {
      switch (newCount) {
        case 0:
          return 'no more bottles';
        case 1:
          return '1 bottle';
        default:
          return `${newCount} bottles`;
      }
    };

    return (
      `${capitalize(getBottles())} of beer on the wall, ` +
      `${getBottles()} of beer.\n` +
      `${getWhatYoureTaking()}, ` +
      `${getHowManyLeft(--count)} of beer on the wall.\n`
    );
  }
}

export { Bottles };
