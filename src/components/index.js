import _ from 'underscore';
import Hint from './hint';
import React from 'react';
import styles from './index.scss';

const POEM = [
  'Tripping along the busy sidewalk,',
  'Our eyes look up and around.',
  'We bump into each other as we stare and chat,',
  'Our heads tilt and spin with each sound.',
  'Beep.  Honk.  Whoosh.  Vroom.',
  'Bump.  Clank.  Thump.  Zoom.',
  'Watching the cabs go zipping by,',
  'They screech as they stop, turn, and go.',
  'There are so many people rushing about,',
  'Up on the streets and in the subways below.',
  'Achoo.  Ahem.  Bump.  Trip.',
  'Rattle.  Shuffle.  Clink.  Zip.',
  'We walk and watch, there’s no time to stop,',
  'But there’s really so much to see.',
  'There are nine blocks to go and we’re already late,',
  'Oh no, look out for that tree!',
  'Thud.'
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

const Poem = ({lines}) => <Items items={_.map(lines, n => [n, POEM[n - 1]])} />;

const Question = ({children, id, content}) =>
  <div className={styles.question}>
    <div className={styles.questionContent}>{content}</div>
    <div className={styles.answers}>{children}</div>
  </div>;

export default () =>
  <div className={styles.root}>
    <div className={styles.poemTitle}>City Guests</div>

    <div className={styles.fullPoem}>
      <Poem lines={_.range(1, POEM.length + 1)} />
    </div>

    <Question
      content={
        <span>1. In the poem, which words are examples of <Hint content='A word that imitates the sound it is describing'>onomatopoeia</Hint>?</span>
      }
    >
      <Items
        items={[
          ['A', 'We walk and watch'],
          ['B', 'Our heads tilt and spin'],
          ['C', 'Achoo.  Ahem.  Bump.  Trip.'],
          ['D', 'Up on the streets']
        ]}
      />
    </Question>

    <Question
      content='2. What line in the poem has a different rhythm?'
    >
      <Items
        items={[
          ['A', <Hint content={<Poem lines={[6]} />} position='right'>Line 6</Hint>],
          ['B', <Hint content={<Poem lines={[7]} />} position='right'>Line 7</Hint>],
          ['C', <Hint content={<Poem lines={[15]} />} position='right'>Line 15</Hint>],
          ['D', <Hint content={<Poem lines={[17]} />} position='right'>Line 17</Hint>]
        ]}
      />
    </Question>

    <Question
      content='3. Which of these lines from the poem rhyme?'
    >
      <Items
        items={[
          ['A', <Hint content={<Poem lines={[1, 3]} />} position='right'>Lines 1 and 3</Hint>],
          ['B', <Hint content={<Poem lines={[5, 6]} />} position='right'>Lines 5 and 6</Hint>],
          ['C', <Hint content={<Poem lines={[10, 11]} />} position='right'>Lines 10 and 11</Hint>],
          ['D', <Hint content={<Poem lines={[13, 15]} />} position='right'>Lines 13 and 15</Hint>]
        ]}
      />
    </Question>

    <Question
      content={
        <div>
          <div>4. Read lines 3 and 4.</div>
          <Poem lines={[3, 4]} />
          <div>These lines best support the idea that the speakers...</div>
        </div>
      }
    >
      <Items
        items={[
          ['A', 'are clumsy'],
          ['B', 'do not like the noise'],
          ['C', 'are interested in all of the sights and sounds around them'],
          ['D', 'should not talk while they are walking']
        ]}
      />
    </Question>

    <Question
      content={
        <span>5. What can you conclude from <Hint content={<Poem lines={[17]} />}>the last line of the poem</Hint>?</span>
      }
    >
      <Items
        items={[
          ['A', 'Cabs are screeching as they zip by the speakers.'],
          ['B', 'The speakers are in a hurry because they are late.'],
          ['C', 'Someone runs into a tree.'],
          ['D', 'The speakers are in the middle of a lot of traffic and people.']
        ]}
      />
    </Question>

    <Question
      content={
        <span>6. This poem is an example of narrative poetry <strong>mostly</strong> because it...</span>
      }
    >
      <Items
        items={[
          ['A', 'tells a story'],
          ['B', 'has a funny ending'],
          ['C', 'describes feelings'],
          ['D', 'has lines that rhyme']
        ]}
      />
    </Question>

    <Question
      content={
        <span>7. This poem has __ <Hint content={<img src='gfx/stanzas.png' />}>stanzas</Hint> and ___ <Hint content={<img src='gfx/lines.png' />}>lines</Hint>.</span>
      }
    >
      <Items
        items={[
          ['A', '17 stanzas  and 1 line'],
          ['B', '2  stanzas and 17 lines'],
          ['C', '1 stanza and 17 lines'],
          ['D', 'None of the above']
        ]}
      />
    </Question>

    <Question
      content={
        <span>8. The poet uses onomatopoeia in <Hint content={<Poem lines={[5, 6]} />}>lines 5 and 6</Hint> to help the reader understand...</span>
      }
    >
      <Items
        items={[
          ['A', 'how much there is to see in the city'],
          ['B', 'all the things that they can do in the city'],
          ['C', 'the sounds they hear in the city'],
          ['D', 'how they feel in the city']
        ]}
      />
    </Question>

    <Question
      content={
        <span>9. <Hint content={<Poem lines={[13, 14, 15]} />}>Lines 13 through 15</Hint> show that the speaker...</span>
      }
    >
      <Items
        items={[
          ['A', 'is lost in the city and needs help'],
          ['B', 'is late to work and is trying to hurry'],
          ['C', 'is sightseeing with family and have a busy schedule'],
          ['D', 'is tired of walking and wants to go home']
        ]}
      />
    </Question>

    <Question
      content='10. According to the speaker, how do they feel about being city guests? (Short answer, use evidence from poem)'
    />

    <Question
      content='Bonus (10 points) Draw an image of what the poet is describing from the poem. Provide evidence from the poem to support your image.'
    />
  </div>
