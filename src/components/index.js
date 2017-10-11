import _ from 'underscore';
import Hint from './hint';
import React from 'react';
import styles from './index.scss';

const PASSAGE = [
  <div>
    People in Austin, Texas became frightened as bats by the hundreds moved into the <Hint content={
      <div>
        <div>A narrow opening, especially in a rock or wall.</div>
        <img src='gfx/crevices.jpg' />
      </div>
    } position='below'>crevices</Hint> of the <Hint
      content='Build or form (something) again after it has been damaged or destroyed.'
      position='below'
    >reconstructed</Hint> downtown Congress Avenue Bridge in 1980. Looking up at the bridge at dusk or early dawn people exclaimed, “It’s Dracula’s Castle!” Car lights filtered through the crevices as they passed overhead. The bats hung upside down folding their wings about their bodies. The people wanted the bats <Hint content='To remove or destroy.' position='below'>eradicated</Hint>.
  </div>,
  'Bat Conservation International (BCI) told the people of Austin the truth about bats. They had nothing to fear if they did not try to handle the bats. In fact, the bats actually help the environment. Every spring and summer night the bats fly out from under the bridge and consume between 10,000 and 30,000 pounds of insects.',
  <div>
    The bat colony spends the summer in Austin and the winter in Mexico. Most of the bats are female. Each has a single baby in early June. Although there are thousands of pups born at the same time, each mother can find her little pup by its sound and scent. The baby weighs one  third the weight of its mother. Each pup will grow three inches long and have a wing span of approximately one foot. After five weeks, the pup can hunt insects on its own. Before that time, the mother <Hint content={
      <div>
        <div>Feed (a baby) at the breast.</div>
        <img src='gfx/nurses.jpg' />
      </div>
    } position='below'>nurses</Hint> her pup.
  </div>,
  'The bat has a unique skeleton. It is specially adapted for flying. Its hands and arms form the wings. Highly developed arm bones hold out flaps of skin from the bat’s back and belly. A double layer of thin, flexible skin covers the long bones of the fingers making wings.',
  <div>
    Today, seeing the bats is a treat for the people of Austin as well as for the many <Hint content={
      <div>
        <div>A person who is traveling or visiting a place for pleasure.</div>
        <img src='gfx/tourist.jpg' />
      </div>
    } position='below'>tourists</Hint>. From March through September people flock to the bridge to see the nightly flight of the bats. There are walking paths along the Colorado River which runs through Austin. You can walk the path close to the Congress Avenue Bridge and pick out a good spot to see the bats’ flight. Be sure to arrive about thirty minutes before dusk. As twilight fills the sky, so do thousands of bats. They darken the sky as they fly out on their nightly dining tour of choice insects. This is a sight you won’t want to miss!
  </div>,
  <div>
    People of Austin are proud to have the largest <Hint content='In, relating to, or characteristic of a city or town.' position='below'>urban</Hint> population of bats in North America. They are a tourist attraction and a natural control of insect pests. These Mexican free tail bats also benefit by enjoying the feast of insects from their summer bridge home.
  </div>
];

const Items = ({items}) =>
  <table className={styles.items}>
    <tbody>
      {
        _.map(items, ([id, content]) =>
          <tr className={styles.item} key={id}>
            <td className={styles.itemId}>{id}</td>
            <td className={styles.itemContent}>{content}</td>
          </tr>
        )
      }
    </tbody>
  </table>;

const Passage = ({lines}) =>
  <Items items={_.map(lines, n => [n, PASSAGE[n - 1]])} />;

const Question = ({children, content}) =>
  <div className={styles.question}>
    <div className={styles.questionContent}>{content}</div>
    <div className={styles.answers}>{children}</div>
  </div>;

export default () =>
  <div className={styles.root}>
    <div className={styles.poemTitle}>The Austin Bridge Bats</div>

    <div className={styles.fullPassage}>
      <Passage lines={_.range(1, PASSAGE.length + 1)} />
    </div>

    <img src='gfx/diagram.png' style={{maxWidth: '100%'}}/>

    <Question
      content={
        <div>
          1. Look at the dictionary entry:
          <br />
          <br />
          <strong>han•dle</strong> \han’dl\ <i>verb</i><br />
          <strong>1.</strong> to respond in a certain way <strong>2.</strong> to have overall responsibility <strong>3.</strong> to try to examine <strong>4.</strong> to put up with<br />
          <br />
          Which definition applies to the word handle as used in <Hint content={<Passage lines={[2]} />} position='right'>paragraph 2</Hint>?
        </div>
      }
    >
      <Items
        items={[
          ['A', 'Definition 1'],
          ['B', 'Definition 2'],
          ['C', 'Definition 3'],
          ['D', 'Definition 4']
        ]}
      />
    </Question>

    <Question
      content={
        <div>2. The best summary for this selection would be –</div>
      }
    >
      <Items
        items={[
          ['F', 'A bat colony overtook the Congress Avenue Bridge in Austin. The people wanted to kill all the bats because they were afraid of them. Today, it is called “Dracula’s Castle” by tourists that visit the area.'],
          ['G', 'Bats have an unusual skeleton. They have five fingers and their wings have a double layer of skin. They are good for the environment because they eat 10,000 to 30,000 pounds of bats.'],
          ['H', 'Bats come to Austin every winter from Mexico. They care for their young until they are old enough to hunt on their own. The mother is able to recognize her offspring based on its sound and scent.'],
          ['J', 'A bat colony overtook the Congress Avenue Bridge after being reconstructed. People feared the colony; therefore, the BCI educated them about the environmental benefits. Today, the bats are a major attraction to tourists.']
        ]}
      />
    </Question>

    <Question
      content={
        <div>3. What is the main idea of <Hint content={<Passage lines={[5]} />} position='right'>paragraph five</Hint>?</div>
      }
    >
      <Items
        items={[
          ['A', 'The bats have become a major attraction.'],
          ['B', 'The best place to see the bats is from the river bank.'],
          ['C', 'The bats are a big hit in Austin during the winter months.'],
          ['D', 'There are not many insects in Austin.']
        ]}
      />
    </Question>

    <Question
      content={
        <div>4. A mother bat can distinguish her pup from the others because—</div>
      }
    >
      <Items
        items={[
          ['F', 'pups stay in the same spot'],
          ['G', 'pups have a unique smell and sound'],
          ['H', 'pups’ shrieks are different'],
          ['J', 'pups look different from one another']
        ]}
      />
    </Question>

    <Question
      content={
        <div>5. The main mission of Bat Conservation International is to—</div>
      }
    >
      <Items
        items={[
          ['A', 'protect bats'],
          ['B', 'raise bats'],
          ['C', 'attract tourists'],
          ['D', 'establish boundaries']
        ]}
      />
    </Question>

    <Question
      content={
        <div>6. The author included paragraphs <Hint content={<Passage lines={[3]} />} position='right'>3</Hint> and <Hint content={<Passage lines={[4]} />} position='right'>4</Hint> to—</div>
      }
    >
      <Items
        items={[
          ['F', 'explain how the pup hunts for its own food'],
          ['G', 'outline how the bats migrate and take care of their young'],
          ['H', 'provide the reader with background knowledge on bats'],
          ['I', 'tell the reader about the reconstruction in Austin']
        ]}
      />
    </Question>

    <Question
      content={
        <div>7. What can the reader conclude about bats from the information presented by the author?</div>
      }
    >
      <Items
        items={[
          ['A', 'Bats are a part of every urban society.'],
          ['B', 'Bats frighten people, yet help the environment.'],
          ['C', 'Bats perform for the tourists in Austin.'],
          ['D', 'Bats overrun the human population']
        ]}
      />
    </Question>

    <Question
      content={
        <div>8. The residents of Austin appreciate the bats because—</div>
      }
    >
      <Items
        items={[
          ['F', 'they were afraid of the bats'],
          ['G', 'bats are shy and like to hide from the tourists'],
          ['H', 'they control the insect population'],
          ['I', 'bats are proud animals']
        ]}
      />
    </Question>

    <Question
      content={
        <div>9. According to the <Hint content={<img src='gfx/diagram.png' />} position='below'>diagram</Hint>, a bat has—</div>
      }
    >
      <Items
        items={[
          ['A', 'five fingers'],
          ['B', 'four feet'],
          ['C', 'skinned wings'],
          ['D', 'great hearing']
        ]}
      />
    </Question>
  </div>;
