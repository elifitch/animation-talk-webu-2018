/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import {
  BlockQuote,
  Cite,
  Quote,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  // Image,
  // Text,
  Notes,
  Code
} from 'spectacle';
import {
  Bounce,
  Fade,
  CallFn,
  DropIn,
  FromLeft,
  FromTop,
  Anticipation,
  FollowThrough,
  Letterwave,
  Squash,
  Stretch,
  FromTopSquashStretch,
  FromTopFollowThroughFun,
  FromTopFollowThroughSerious,
  FromTopSecondaryAction,
  BrandEnergetic,
  BrandCalm,
  Rumble,
  Stroke,
} from './components/anim/index';
import ImageRow from './components/image-row';
import BounceList from './components/bounce-list';
import theme, { contentWidth, whitesmoke } from './theme';
import Title from './components/title';
import SectionHeading from './components/section-heading';
import SlideHeading from './components/slide-heading';
import ListHeading from './components/list-heading';
import SubsectionHeading from './components/subsection-heading';
import LinkHeading from './components/link-heading';
import Pic from './components/pic';
import Vid from './components/vid';
import Footer from './components/footer';
import LoginModal from './components/login-modal';
import Confetti from './components/confetti';
import BouncingBall from './components/bouncing-ball';
import Comparison from './components/comparison';
import NotificationBadge from './components/notification-badge';
import LogoRowSlide from './slides/logo-row-slide';
import EarthPointerSlide from './slides/earth-pointer-slide';
import DorsalVentralBrain from './slides/dorsal-ventral-brain';
import ProgressBarDemo from './slides/progress-bar-demo';
import PapyrusSlide from './slides/papyrus-slide';
import ThankYouSlide from './slides/thank-you-slide';
import wiredUK from '../assets/wired-uk.mp4';
import vimeo from '../assets/vimeo-cameo.mp4';
import rd from '../assets/rd-contstruction.mp4';

require('normalize.css');

// Aliases
const SH = SectionHeading;
const SSH = SubsectionHeading;
const H = SlideHeading;
const Annot = ({ children }) => <H size={6}>{children}</H>;
Annot.propTypes = PropTypes.node.isRequired;
const Hsmall = Annot;

export default class Presentation extends React.Component {
  constructor() {
    super();
    this.state = {
      showSocialPointer: false,
      enableConfetti: false,
      fireConfetti: false,
    };
    this.showSocialPoiner = this.showSocialPoiner.bind(this);
    this.hideSocialPoiner = this.hideSocialPoiner.bind(this);
    this.enableConfetti = this.enableConfetti.bind(this);
    this.shootConfetti = this.shootConfetti.bind(this);
    this.stopConfetti = this.stopConfetti.bind(this);
  }
  showSocialPoiner() {
    this.setState({ showSocialPointer: true });
  }
  hideSocialPoiner() {
    this.setState({ showSocialPointer: false });
  }

  enableConfetti() {
    this.setState({ enableConfetti: true });
  }
  shootConfetti() {
    if (this.state.enableConfetti) {
      this.setState({ fireConfetti: true });
    }
  }
  stopConfetti() {
    if (this.state.enableConfetti) {
      this.setState({ fireConfetti: false });
    }
  }

  render() {
    return (
      <div
        role="widget" // eslint-disable-line
        onMouseDown={this.shootConfetti}
        onMouseUp={this.stopConfetti}
      >
        <Deck
          transition={['slide']}
          transitionDuration={300}
          theme={theme}
          controls={false}
          contentWidth={contentWidth}
          contentHeight={1000}
          progress="bar"
          bgColor="secondary"
          style={{
            zIndex: 5
          }}
        >
          <Slide >
            <Title lineHeight={1}>Web Animation</Title>
            <Heading size={4} textColor="nearBlack">How to make friends and influence people</Heading>
          </Slide>

          {
            process.env.NODE_ENV === 'production' && (
              <Slide bgColor="#62ffc2">
                <H size={4} style={{ marginBottom: '0.5em' }}>Hey there, looks like you found my talk on the internet!</H>
                <H size={4} style={{ marginBottom: '0.5em' }}>If you're interested in some limited speaker notes, press <Code>alt + P</Code> .</H>
                <H size={4} style={{ marginBottom: '0.5em' }}>FYI there are some issues with font &amp; video loading on safari that I did not have time to address.</H>
                <H size={4}>It is best viewed at 1920 x 1080 resolution, and I can't guarantee it will look good otherwise.</H>
                <Notes>

                </Notes>
              </Slide>
            )
          }

          <Slide>
            <H>Hi, I'm Eli</H>
            <Fade><Hsmall>I like to make things on the internet</Hsmall></Fade>
          </Slide>

          <Slide>
            <LogoRowSlide />
            <CallFn fn={this.showSocialPoiner} />
            <CallFn fn={this.hideSocialPoiner} />
          </Slide>

          <Slide>
            <ListHeading>Today I'm going to howl about</ListHeading>
            <List>
              <Fade><ListItem>Why animation should be a first class citizen in UI design</ListItem></Fade>
              <Fade><ListItem>How to use animation to influence cognition</ListItem></Fade>
              <Fade><ListItem>How animation can shape users' emotional state</ListItem></Fade>
              <Fade><ListItem>How to build animation into your design process</ListItem></Fade>
            </List>
          </Slide>

          <Slide>
            <ImageRow
              showFirst={false}
              srcs={['val-head.jpg', 'rachel-nabors.jpg', 'sarah-drasner.jpg']}
              styleOverrides={[{ borderRadius: '100%' }, { borderRadius: '100%' }, { borderRadius: '100%' }]}
            />
            <Notes>
              Before I get started, I want to take a moment to acknowledge some folks, without whom I certainly
              wouldn't be standing up here talking about animation today, but whithout whom I might not have become
              a web developer in the first place. Without them I might have continued down a dangerous and
              self destructive path and applied to law school.
            </Notes>
          </Slide>

          <Slide>
            <SH>Animation's place in interactive design</SH>
          </Slide>

          <Slide>
            <H>Animation is<br />unfairly trivialized</H>
            <Notes>
              Animation is often regarded with skepticism at best, and outright derision at worst.
            </Notes>
          </Slide>

          <Slide>
            <div><Bounce><Heading size={4}>Superfluous</Heading></Bounce></div>
            <div><Bounce><Heading size={4}>It's only surprise &amp; delight</Heading></Bounce></div>
            <div><Bounce><Heading size={4}>Just makes it pretty</Heading></Bounce></div>
            <div><Bounce><Heading size={4}>Just for polish</Heading></Bounce></div>
            <div><Bounce><Heading size={4}>Sugar</Heading></Bounce></div>
            <Notes>
              I've heard folks call animation in UI design superfluous, give it a backhanded complement of "surprise and delight"
              the implication being that its not serious enough to be a part of "real" design
            </Notes>
          </Slide>

          <Slide>
            <Pic src="data-bullshit.gif" />
            <Notes>
              This is total nonsense. 
            </Notes>
          </Slide>

          <Slide>
            <Rumble><Pic src="strong-emoji.png" /></Rumble>
            <Notes>
              Animation is actually incredibly powerful, expressive and useful design tool.
              It deserves to be taken seriously, at least as seriously as traditional design precepts.
            </Notes>
          </Slide>

          <Slide>
            <SSH>A different way<br />to think about design</SSH>
            <Notes>
              In order to fully appreciate design's usefulness, lets think about design in a kind of weird way.
            </Notes>
          </Slide>

          <Slide>
            <H><Fade>Biological</Fade> &amp; <Fade>Cultural</Fade></H>
            <Notes>
              Design leverages biological and cultural obserservations of how humans process our environemnt in order to more effectively rely information.
              Without the human hindbrain's ability to rapidly draw associations, and fit new things into established patterns, design wouldn't work.
            </Notes>
          </Slide>

          <Slide>
            <Pic src="design-hierarchy.png" />
          </Slide>

          <Slide>
            <Pic src="jogger-hierarchy.jpg" />
          </Slide>

          <Slide>
            <Pic portrait src="futura-diagram.jpg" />
          </Slide>

          <Slide>
            <Pic src="zg-math.gif" />
          </Slide>

          <Slide>
            <Pic src="architecture.jpg" />
          </Slide>

          <Slide>
            <Comparison>
              <Fade block>
                <Pic
                  src="futura-diagram.jpg"
                  style={{ width: 'auto', height: '70vh', minWidth: 'none' }}
                // style={{ height: '60vh', width: 'auto' }}
                />
              </Fade>
              <H>
                <span style={{ fontSize: '12rem' }}>=</span>
              </H>
              <Fade block>
                <Pic
                  src="architecture.jpg"
                  style={{ width: '100%', height: 'auto', minWidth: 'none' }}
                />
              </Fade>
            </Comparison>
            <Notes>

            </Notes>
          </Slide>
          
          <Slide>
            <H>But we can't assume<br />the same about motion?</H>
            {/* <Annot>[[maybe communicate this in images]</Annot> */}
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <H>Animation <Bounce>is</Bounce> <Bounce>no</Bounce> <Bounce>different</Bounce></H>
            <H><Fade>Engages the brain differently</Fade></H>
            <Notes>
              We infer at least as much information from how things move or change over time.
              In fact some research suggests that we infer *more* information from animation than we do "traditional" design
            </Notes>
          </Slide>

          <Slide>
            <SSH>Two Streams Hypothesis</SSH>
            <Notes>
              animation engages the brain differently than other types of visual information. 
              The two steams hypothesis describes this.
            </Notes>
          </Slide>

          <Slide>
            <DorsalVentralBrain />
            <Notes>
              The what system, also called the ventral system, takes the lower pathway through the brain, connecting more
              directly to the parts of the brain that control things like long term memory, recognition, and perception
              of small details. The where system, also called the dorsal system, is associated with the perception of
              motion, spacial awareness, and muscle memory like catching a ball. It's also *much* faster to process.
            </Notes>
          </Slide>

          <Slide>
            <Heading size={3}>Ventral Stream</Heading>
            <div><Bounce><Heading size={4}>Fine details</Heading></Bounce></div>
            <div><Bounce><Heading size={4}>Slower processing</Heading></Bounce></div>
            <div><Bounce><Heading size={4}>High consciousness</Heading></Bounce></div>
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <Heading size={3}>Dorsal Stream</Heading>
            <div><Bounce><Heading size={4}>Visually guided behavior</Heading></Bounce></div>
            <div><Bounce><Heading size={4}>Faster processing</Heading></Bounce></div>
            <div><Bounce><Heading size={4}>Low consciousness</Heading></Bounce></div>
            <Notes>
              The where system is also evolutionary MUCH older, and to borrow a computer science term, closer to the metal.
              You can use animation to more directly communicate with the users hindbrain, and more efficiently manage users cognition
              and emotional state, which at the end of the day, is the goal of design: helping people understand information better, 
              and forging a deeper connection betrween the user and the experience.
            </Notes>
          </Slide>

          {/* <Slide>
            <H>
              <H size={3}>Ventral stream - <Fade>Static</Fade></H>
              <H size={3}>Dorsal stream - <Fade>Motion</Fade></H>
            </H>
            <Notes>
              Margaret Livingstone, a professor of neurobiology at harvard university 
              notes that humans have two primary pathways of visual perception: the what system and the where system. 
              -------------------------------
              The where system is also evolutionary MUCH older, and to borrow a computer science term, closer to the metal.
              You can use animation to more directly communicate with the users hindbrain, and more efficiently manage users cognition
              and emotional state, which at the end of the day, is the goal of design: helping people understand information better, 
              and forging a deeper connection betrween the user and the experience.

              Static design, like color, hierarchy, typography, mostly engages the what system. Animation engages a 
              whole different visual pathway, a whole other way that people communicate and process information.
              Which means there's this whole other visual pathway we can use to communicate. The Where System is 
              associated with muscle memory, which makes it ideal for creating actions that reinforce spacial 
              systems and cue gesture interactions.
            </Notes>
          </Slide> */}

          {/* <Slide>
            <H size={3}>What System - <Fade>Static design</Fade></H>
            <H size={3}>Where System - <Fade>Animation</Fade></H>
            <Notes>
              
            </Notes>
          </Slide> */}

          {/* <Slide>
            <H size={3}>What System - <Fade>more conscious</Fade></H>
            <H size={3}>Where System - <Fade>less conscious</Fade></H>
            <Notes>
              The what system is more conscious, and the where system tends to be more subtle. We can use this subtleness
              to our advantage. That's not to say that animation itself is always subtle, but its influence can be.
            </Notes>
          </Slide>

          <Slide>
            <H size={3}>What System - <Fade>software</Fade></H>
            <H size={3}>Where System - <Fade>hardware</Fade></H>
            <Notes>
              To fall back on a tech analogy, the what system is more highly evolved, it's newer, it's more like software.
              The where system is more like hardware. Faster, more intimate, closer to the metal.
            </Notes>
          </Slide> */}

          <Slide>
            <H>Animation is an efficient<br />way to communicate</H>
            <Notes>
              Because of this more "hardware" level connection with the human subconscious, animation is an incredibly information dense 
              way to communicate. At the very least it deserves an equal place alongside the old stalwarts of static design,
              like color and typography. And I'd argue that it actually might offer an even more efficient way to 
              communicate information to people.
            </Notes>
          </Slide>

          <Slide>
            <SH>Animation &amp; Cognition</SH>
            <Notes>
              Animation's place in our visual perception pipeline gives it unique abilities to influence human cognition
            </Notes>
          </Slide>

          <Slide>
            <ListHeading>Managing users' cognition</ListHeading>
            <List>
              <ListItem><Fade>Animating responsibly</Fade></ListItem>
              <ListItem><Fade>Lighten cognitive load</Fade></ListItem>
              <ListItem><Fade>Cognitive "muscle memory"</Fade></ListItem>
              <ListItem><Fade>Influence perception of time</Fade></ListItem>
            </List>
          </Slide>

          <Slide>
            <SSH>Ethical animation</SSH>
            <Notes>
              Because animation is a more intimate form of communication, it can have wildly unintended and sometimes even dangerous consequences.
              Before talking about all the cool stuff you can do with animation, we need to take a moment to talk about how to animate with
              accessibility in mind. As we'll see in a minute, animation has profound influence over how we think and feel. It is of the 
              *utmost* importance to not abuse that power or embrace "dark patterns".
            </Notes>
          </Slide>

          <Slide>
            <Pic src="obnoxious-ad.gif" />
            <Notes>
              It can be as innocuous as this, using animation's power to guide focus to continually reel attention towards an ad
            </Notes>
          </Slide>

          <Slide>
            <Vid src="slot.mp4" />
            <Notes>
              Or as serious as creating animations specifically to help addict someone to gambling, as is common in slot machines 
              and even many video games such as candy crush and various loot crates.
            </Notes>
          </Slide>

          <Slide>
            <Vid src="overwatch-loot-box.mp4" />
            <Notes>
              Or as serious as creating animations specifically to help addict someone to gambling, as is common in slot machines
              and even many video games such as candy crush and various loot crates.
            </Notes>
          </Slide>

          <Slide>
            <H>Stewardship.</H>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <H>Don't leave the<br />non-visual behind</H>
            <Notes>
              Animation can be a fabulous tool to relay information, as we'll see, but make sure that you include other ways to consume that information for folks who can't see the animation.
              This serves the double purpose of also making your site generally that much more accessible.
            </Notes>
          </Slide>

          <Slide>
            <H>Be mindful of<br />vestibular issues</H>
            <Notes>
              Folks with vestibular disorders can experience intense vertigo, dizziness, neausea, headaches, and other adverse symptoms.
              Try to avoid, animation that covers large parts of the screen, animations that quickly cover large distances, and simultaneous motion in different directions.
              It is worse if these factors are combined. Avoid flashing animations as well, as those can be triggers for folks with epilepsy and migraines.
            </Notes>
          </Slide>

          <Slide>
            <ListHeading>Problematic examples</ListHeading>
            <List>
              <ListItem><LinkHeading href={wiredUK}>Wired.co.uk</LinkHeading></ListItem>
              <ListItem><LinkHeading href={vimeo}>Vimeo Cameo</LinkHeading></ListItem>
              <ListItem><LinkHeading href={rd}>RD Construction</LinkHeading></ListItem>
            </List>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <H>Provide alternatives</H>
            <Code>@media screen and (prefers-reduced-motion)</Code>
            <Notes>
              If animation is a large part of your app, give users the option to disable animations in their user preferences. This will be necessary 
              until the "prefers-reduced-motion" media query lands in more browsers than just Safari. There's no timeline on that right now but 
              hopefully it's soon. Once that media query is widespread, users will you'll be able to set a flag in their browser that you can 
              hook into to reduce or eliminate animation.
            </Notes>
          </Slide>

          <Slide>
            {/* <Annot>[[should have a diff title here, because both cogni and spacial reduce cognitive load]]</Annot> */}
            <SSH>Lighten cognitive load</SSH>
            <Notes>
              Cognitive load is a term tossed around in UX design circles a lot. Basically what it means is the amount of consious and unconscious 
              mental effort being used. Animation can reduce that load by connecting the dots that people would otherwise have to connect themselves.
            </Notes>
          </Slide>

          <Slide>
            <BounceList
              items={[
                'University of Rotterdam',
                'University of New Mexico',
                'University of Las Vegas',
                'University of Nottingham',
                'German Research Foundation',
              ]}
            />
            <Notes>
              Studies from the university of rotterdam and university of new mexico among many others have shown that animation 
              helps people retain information, peform better in problem solving tasks, and learn more efficiently. This is because 
              animation reduces cognitive load, but how?
            </Notes>
          </Slide>

          <Slide>
            <H>&ldquo;Multithreaded&rdquo; thinking</H>
            <Notes>
              When the UI changes, your brain has to spend cycles on determining what has changed on the screen and what that means. 
              When you animate a state transition, that work is offloaded to the visual side of the brain, letting the brain's 
              "main thread" continue uninterrupted, just like a computer with more than one processor thread.
            </Notes>
          </Slide>

          <Slide>
            <H>Reduces "change blindness"</H>
            <Notes>
              Because animation can be used to attract attention, it can indicate when something has changed in the UI.
            </Notes>
          </Slide>

          <Slide>
            <NotificationBadge />
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <H>Cueing</H>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <Vid portrait src="affordance.mp4" />
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <H>Connects states</H>
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <Pic src="confirmation.gif" />
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <SSH>Spacial orientation</SSH>
            <Notes>
              Animation also allows users to build spacial maps, because there's a clear idea of motion from one state to another.
            </Notes>
          </Slide>

          <Slide bgColor="#000">
            <EarthPointerSlide />
            <Notes>
              We live in a spacial world. See? Lots of space. We unconsciously build mental maps of the world around us, and it lets us
              generally know where things are without tons of conscious effort.
            </Notes>
          </Slide>

          <Slide>
            <Heading size={2}>🙅 🔑 👟 🙅</Heading>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <H>Mental map of<br />what's out of view</H>
            <Notes>
              When we create interfaces that snap from state to state, it prevents us 
              from building that mental map and instinctively knowing where we are in a flow.
            </Notes>
          </Slide>

          <Slide>
            <Vid src="amazon-hamburger-menu.mp4" />
            <Notes>
              See menu come in from left help reinforce where button is in UI.
            </Notes>
          </Slide>

          <Slide>
            <H>Provides a sense of depth</H>
            <Notes>
              Humans more naturally understand 3d spaces than 2d spaces. It's common to layer elements on top of other elements
              as your UI becomes more complex. Animating these items into place lets the user understand where they came from,
              creates a sense of depth, and smooths the context change of another item appearing.
            </Notes>
          </Slide>

          <Slide>
            <DropIn>
              <LoginModal />
            </DropIn>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <H>Especially important on mobile</H>
            <Notes>
              Users on mobile look at your app or site through a tiny little port hole, and while moving from view to view 
              it's very easy to become lost. 
            </Notes>
          </Slide>

          <Slide>
            <Vid src="ios-settings.mp4" portrait />
            <Notes>
              This animation from pane to pane makes it clear where in the flow you are, what direction you're going and 
              cues gesture interactions for how to go back.
            </Notes>
          </Slide>

          <Slide>
            <SSH>Animation skews time</SSH>
            <Notes>
              Animation is fundamentally just change over time.
            </Notes>
          </Slide>

          <Slide>
            <H>Time is a funny thing 🤔</H>
            <Notes>
              Time is a funny thing. It can appear to slow down, speed up, expand and contract.
            </Notes>
          </Slide>

          <Slide>
            <Pic src="picard.jpg" />
            <Notes>
              And for some people, time might not even really exist at all
            </Notes>
          </Slide>
          
          <Slide>
            <H>Animation governs our<br />perception of time</H>
            <Notes>
              Humans are really bad at sensing how long things take. We take cues from how things move and change in 
              our environment to know how long time is passing. Thus we can use animation to make it seem like loading 
              takes less time than it actually does.
            </Notes>
          </Slide>

          <Slide>
            <ProgressBarDemo />
            <Notes>
              Grad students at carnegie mellon university showed that progress bars feel like they fill 12% faster if they have 
              bands that animate against the direction of the bar. This operates off the same principle as riding on a train 
              and seeing another train coming the opposite direction, it feels like you're going twice as fast. We naturally 
              try to fit what we see into existing spacial patterns.
            </Notes>
          </Slide>

          {/* <Slide>
            <H>Animation keeps us mentally engaged</H>
            <Annot>[[ripe for cutting]]</Annot>
            <Notes>
              Animation keeps us mentally engaged through a long waiting period, and when we're mentally engaged, 
              time seems to move more quickly.
            </Notes>
          </Slide>

          <Slide>
            <Vid src="slack-loading.mp4" controls autoPlay={false} />
            <Notes>
              Slack conducts a masterclass here, moving from loading anim to loading anim to keep you engaged, 
              and make the loading process seem like it's faster than it actually  is.
            </Notes>
          </Slide> */}

          <Slide>
            <SH>Emotion</SH>
            <Notes>
              So we've been over the myriad ways animation can manage human cognition, but the other side of that 
              coin is how animation can influence our emotional state, even more than static design principles 
              like color or typography, we infer a remarkable amount of information from motion.
            </Notes>
          </Slide>

          <Slide>
            <ListHeading>Influencing emotion</ListHeading>
            <List>
              <div><Fade><ListItem>How humans ascribe meaning to motion</ListItem></Fade></div>
              <div><Fade><ListItem>The building blocks of character</ListItem></Fade></div>
              <div><Fade><ListItem>How to design animations to evoke a desired feeling</ListItem></Fade></div>
            </List>
          </Slide>

          <Slide>
            <SSH>Meaning from motion</SSH>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide transition={['fade']}>
            <Pic src="twa-empty.png" />
            <Notes>
              Simple question, what are these? Seiously what are they? Some shapes, rectangles? 
            </Notes>
          </Slide>

          <Slide transition={['fade']}>
            <Pic src="twa-full.jpg" />
            <Notes>
              Nope, they're characters from a wonderful video game called "Thomas was alone". 
              This one is thomas, here's chris, this one is claire, over here we have laura.
              I know what you're probably thinking right? Okay these are characters, but they don't seem very expressive.
              How could you know anything about them, they're just shapes.
            </Notes>
          </Slide>

          <Slide transitionOut={['fade']}>
            <BlockQuote>
              <Quote>The jump in Thomas Was Alone might be amongst the best ever programmed...</Quote>
            </BlockQuote>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide transitionIn={['fade']}>
            <BlockQuote>
              <Quote>Amazingly, I felt more connected to Thomas Was Alone's colored, polygonal blocks than I have to most human characters</Quote>
              <Cite>Evan Narcisse, Kotaku</Cite>
            </BlockQuote>
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <Vid src="thomas-was-alone-jump.mp4" />
            <Notes>
              Each distinct character has a distint jump animation that goes with their charchacter. Thomas has a bright and 
              happy jumping style that underlines his optimism. John has a big scrunch up and bound, very bombastic, and 
              it goes right along with his arrogant attitude. Chris has a short boop and plop, he's very self conscious about 
              his limitations when it comes to jumping. and on and on it goes.  The point is, we ascribe characters, feelings, 
              and indeed emotions to these abstract polygons.  Their animation was a big part of that.
            </Notes>
          </Slide>

          <Slide>
            <Vid src="fritz-heider-marianne-simmel.mp4" />
            <Cite>Fritz Heider and Marianne Simmel 1944</Cite>
            <Notes>
              This has been verified with experiments as well, most famously by Fritz Heider and Marianne Simmel in 1944.
              They showed this film to subjects, and all of them described the scene by anthropomorphizing the shapes. 
              We can use the tendencies of humans to ascribe meaning to motion, to fit what we observe into existing patterns 
              in order to create certain character.
            </Notes>
          </Slide>

          <Slide>
            <SSH>The building blocks<br />of character</SSH>
            <Notes>
              It's comparatively easy to give users an affordance by hinting at an action, or to help users build spacial 
              relationships by animating view transitions. If we're going to influence user's emotional responses, we need 
              to be much more intentional about the details of our animations.
            </Notes>
          </Slide>

          <Slide>
            <H> <FromLeft>Timing</FromLeft> &amp; <Bounce>Spacing</Bounce></H>
            <Notes>
              Timing and spacing work together to form the character of an animation.
            </Notes>
          </Slide>

          <Slide>
            <BouncingBall />
            <Cite>linear</Cite>
            <Notes>
              Timing forms the structure of an animation. In CSS terms, this is the "duration" of an animation. 
              Illustrating what effect timing alone has on a classic bouncing ball animation, you can probably see 
              that the animation doesn't have a lot of character, and it's almost unsettlingly mechanical.
            </Notes>
          </Slide>

          <Slide>
            <BouncingBall ease={() => ({ primary: 'Power4.easeInOut' })} />
            <Cite>ease out</Cite>
            <Notes>
              Now we're getting somewhere! If timing is the structure of an animation, spacing is where we get 
              most of the style. It's kind of like the CSS to timing's HTML. It's called spacing, because it 
              in the old days when frames were drawn by hand, this would refer to the amount of space between 
              each frame. In UI animation we call it easing.
            </Notes>
          </Slide>

          <Slide>
            <BouncingBall ease={() => ({ primary: 'Bounce.easeOut' })} />
            <Cite>bounce</Cite>
            <Notes>
              With just our spacing, our easing curve, we can make the ball appear to bounce, and really influence
              its character
            </Notes>
          </Slide>

          <Slide>
            <BouncingBall 
              ease={({ CustomBounce }) => {
                const primaryEaseId = 'myBounce';
                const squashEaseId = 'myBounce-squash';
                CustomBounce.create(primaryEaseId, { strength: 0.3, squash: 0, squashID: squashEaseId });
                return { primary: primaryEaseId, secondary: squashEaseId };
              }}
              duration={0.6}
            />
            <Cite>hard bounce</Cite>
            <Notes>
              See how much difference a simple change in spacing, or easing, can bring? When before we had something 
              like a ping pong ball we now have something heavy and weighty. The entire character is different. This 
              is a simple, classic example, but it's classic because it's an elegant way to show just how much impact 
              spacing can have on an animation. We can take this and extrapolate it way out to create all sorts of 
              sensations from our animations.
            </Notes>
          </Slide>

          <Slide>
            {/* <H>Two halves of the same coin</H> */}
            <Vid src="timing-spacing-coin.mp4" style={{ maxHeight: '80vmin' }} />
            <Notes>
              Timing and spacing work together to form the core of the character you want to create, and indeed the feeling
              you want to evoke.
            </Notes>
          </Slide>
          
          <Slide>
            <SSH>Disney's 12 Principles</SSH>
            <Cite>Ollie Johnston &amp; Frank Thomas</Cite>
            <Notes>
              If we're going to create animations that evoke the desired emotions from our users, that exhibit the right character, 
              traditional animation principles can be extremely useful. Disney's 12 principles are the gold standard, but many 
              of them don't really make sense on the web. So it's gonna be more like 5. 4? And more like guidelines than principles.
              We'll walk through them 
              with examples that show how they can make a brand feel everything from lively and energetic, evoking a feeling of joy in users;
              to how they can make a brand feel more serious and somber, evoking a feeling of trust in users; and everything in between.
            </Notes>
          </Slide>
          <Slide>
            <SSH>Disney's 5 Principles</SSH>
          </Slide>
          <Slide>
            <SSH>Disney's 4??? Principles</SSH>
          </Slide>
          <Slide>
            <SSH>Disney's 4 Guidelines?</SSH>
          </Slide>
          <Slide>
            <SSH>Sure, lets go with that</SSH>
          </Slide>

          <Slide>
            {/* <H><Anticipation>Anticipation</Anticipation> &amp; <FollowThrough>Follow through</FollowThrough></H> */}
            <H><FollowThrough>Follow through</FollowThrough></H>
            <Notes>
              Anticipation is a movement against the main animation in--dot dot dot--anticipation of the main animation. 
              Follow through is the opposite, an animation that continues through the final resting place 
            </Notes>
          </Slide>

          <Slide>
            <FromTop><LoginModal /></FromTop>
            <Cite>No follow through</Cite>
            <Notes>
              Here we have two animations, one more playful and one more serious, that use anticipation and followthrough. 
              The playful one uses anticipation n followthrough to show effervesence and joie de vivre. It can be a really 
              effective way to show life and "boucniness". But here we also are using anticipation and followthrough, but 
              in this case it shows weight and solidity, traits that more serious brands like to fancy themselves as having.
            </Notes>
          </Slide>

          <Slide>
            <FromTopFollowThroughFun><LoginModal /></FromTopFollowThroughFun>
            <Cite>Energetic follow through</Cite>
            <Notes>
              Here we have two animations, one more playful and one more serious, that use anticipation and followthrough.
              The playful one uses anticipation n followthrough to show effervesence and joie de vivre. It can be a really
              effective way to show life and "boucniness". But here we also are using anticipation and followthrough, but
              in this case it shows weight and solidity, traits that more serious brands like to fancy themselves as having.
            </Notes>
          </Slide>

          <Slide>
            <FromTopFollowThroughSerious><LoginModal /></FromTopFollowThroughSerious>
            <Cite>Serious follow through</Cite>
            <Notes>
              Here we have two animations, one more playful and one more serious, that use anticipation and followthrough.
              The playful one uses anticipation n followthrough to show effervesence and joie de vivre. It can be a really
              effective way to show life and "boucniness". But here we also are using anticipation and followthrough, but
              in this case it shows weight and solidity, traits that more serious brands like to fancy themselves as having.
            </Notes>
          </Slide>

          <Slide>
            <H><Letterwave>Secondary action</Letterwave></H>
            <Notes>
              Secondary action can make animation seem more playful, or it can simply make an animation feel more real, grounded, 
              and organic.
            </Notes>
          </Slide>

          <Slide>
            <Pic src="medium-clap.gif" />
            <Notes>
              These are both uses of secondary action. The first is a way to give an animation extra pop, kind of adding a
              flourish to something to make an action feel special and rewarding. This is a big part of animation for loot
              boxes in video games, and gambling displays. Again I can't stress enough the importance of ethics here.
              The second is inputs cascading into place with their parent. It's a way to make an animation feel more natural
              and grounded, ideal for more serious brands.
            </Notes>
          </Slide>

          <Slide>
            <FromTopSecondaryAction><LoginModal /></FromTopSecondaryAction>
            <Cite>Secondary action</Cite>
            <Notes>
              These are both uses of secondary action. The first is a way to give an animation extra pop, kind of adding a 
              flourish to something to make an action feel special and rewarding. This is a big part of animation for loot
              boxes in video games, and gambling displays. Again I can't stress enough the importance of ethics here.
              The second is inputs cascading into place with their parent. It's a way to make an animation feel more natural 
              and grounded, ideal for more serious brands.
            </Notes>
          </Slide>

          <Slide>
            <H><Squash>Squash</Squash> &amp; <Stretch>Stretch</Stretch></H>
            <Notes>
              As objects move through air, they deform a little bit. This elongation along the axis of motion also 
              helps to visually give the appearance of a smoother animation (much as blurring does). Used in small doeses 
              it just serves to make the animation feel more natural, and for brands that want to be fun, playful, and happy, 
              or want to make their users feel that way, squash n stretch is a great way to make your project stand out. 
              It's hard to pull off well, so most don't even try, put in a little effort and reap the dividends.
            </Notes>
          </Slide>

          {/* <Slide>
            <FromTop><LoginModal /></FromTop>
            <Cite>Normal ease</Cite>
            <Notes>
              See how this modal on the right enters, and it feels just that much more cheeky and spirited? People deride 
              animation as only serving this purpose, but even serving the purpose of making people feel happy while using 
              your product is an amazing tool at your disposal. Don't cast it aside because some people on the internet think 
              they're too serious and important to use it.
            </Notes>
          </Slide> */}

          <Slide>
            <FromTopSquashStretch character="serious"><LoginModal /></FromTopSquashStretch>
            <Cite>Moderate Squash and stretch</Cite>
            <Notes>
              See how this modal on the right enters, and it feels just that much more cheeky and spirited? People deride
              animation as only serving this purpose, but even serving the purpose of making people feel happy while using
              your product is an amazing tool at your disposal. Don't cast it aside because some people on the internet think
              they're too serious and important to use it.
            </Notes>
          </Slide>

          <Slide>
            <FromTopSquashStretch character="fun"><LoginModal /></FromTopSquashStretch>
            <Cite>Fun Squash and stretch</Cite>
            <Notes>
              See how this modal on the right enters, and it feels just that much more cheeky and spirited? People deride
              animation as only serving this purpose, but even serving the purpose of making people feel happy while using
              your product is an amazing tool at your disposal. Don't cast it aside because some people on the internet think
              they're too serious and important to use it.
            </Notes>
          </Slide>

          <Slide>
            <H>These combine to form<br />an infinite palette</H>
            <Notes>
              This might seem limiting, but the right timing, easing, anticipation, follow through, secondary action, and S&amp;S 
              can give you near infinite possibilities in creating the right type of motion for your brand.
            </Notes>
          </Slide>

          <Slide>
            <FromTop><H>Decisive or self assured</H></FromTop>
            <Cite>Restrained in-out</Cite>
            <Notes>
              Restrained ease-in-out is the way to go. They feel balanced, stable, physical, and weighty. Use a restrained followthrough 
              to give the animation a sense of weight, importance, and solidity.
            </Notes>
          </Slide>

          <Slide>
            <BrandEnergetic><H>Energetic or lively</H></BrandEnergetic>
            <Cite>Generous anticipation &amp; followthrough</Cite>
            <Notes>
              Use animations with more springiness, use more generous overshoots/followthroughs. Soft overshoots feel friendly 
              and energetic, sharp, quick overshoots though can show frenetic urgency.
            </Notes>
          </Slide>

          <Slide>
            <BrandCalm><H>Calm, reserved or stable</H></BrandCalm>
            <Cite>Animate non-motion properties</Cite>
            <Notes>
              Use smaller movements, less distance, shorter durations. Maybe choose to animate color, opacity,
              blur instead of using motion at all.
            </Notes>
          </Slide>

          <Slide>
            <H><Stretch fromBottom>Playful</Stretch> or <Letterwave>outgoing</Letterwave></H>
            <Cite>Squash &amp; stretch, secondary action comes out to play</Cite>
            <Notes>
              Use more squash and stretch to make animations feel springy and elastic. Animations that look like they make 
              the sound "boinngngngngngngng". Again, a little goes a long way.
            </Notes>
          </Slide>

          <Slide>
            <SSH>Finding the right character</SSH>
            <Notes>
              Everything we've covered so far on how to evoke the right feelings will be meaningless if you can't find what 
              the right feeling is for your particular application, brand, project, whatever. And this can be the trickiest 
              nut to crack.
            </Notes>
          </Slide>

          <Slide>
            <H>
              <div><Fade>Conservationist</Fade></div>
              <span>vs.</span>
              <div><Fade>Scorched earth</Fade></div>
            </H>
            <Notes>
              When buildling out UI animation for your brand or project, you can either start from scratch, building from the 
              bottom up, or start with what you have, coming from the top down. When setting out to design animation to manage 
              cognition -- to make your UI easier to use, easier to understand -- animations that are slightly different are 
              okay, and the time savings of starting from what you already have is totally worth it! On the other hand, in 
              desinging aniations to evoke a specific set of feelings you need to be much more intentional about the 
              details of your animations. This means that even a small number of animations that deviate from what you need 
              can break everything, and it's worth starting from scratch.
            </Notes>
          </Slide>

          <Slide>
            <H>Start with words</H>
            <Notes>
              I always try to start with words. The best place to look, if the brand in question has one, is a copywriting 
              style guide. Those are treasure troves of descriptive words that detail how the brand wants to be expressed. 
              I also dig through brand guidelines, style guides, I interview folks about how they want the brand to make 
              people feel, how they characterize it. These words will give you a set of sensations that you want to bring 
              out in users. Some common ones I hear a lot are: friendly, energetic, serious, trustworthy, erudite, playful, 
              decisive, things like that. Keep those words as a list, maybe even written out by hand, visible at all times 
              while you're designing animations, so you can make sure they suit.
            </Notes>
          </Slide>

          <Slide>
            <H>Rely on onomatopoeia</H>
            <Notes>
              Sounds like fwoosh, boingngng, kathung, shumpf, kathoom; these sounds can be helpful in communicating how an
              animation is supposed to feel, especially with clients. The sound can even indicate the desired easing.
              Kathoomp is different from kathooooomp, and kaaaaaathoomp.
            </Notes>
          </Slide>

          <Slide>
            <div><Bounce><Heading size={4}>Boingggggggg</Heading></Bounce></div>
            <div><Bounce><Heading size={4}>Fwoosh</Heading></Bounce></div>
            <div><Bounce><Heading size={4}>Shwumpf</Heading></Bounce></div>
            <div><Bounce><Heading size={4}>Kerplunk</Heading></Bounce></div>
            <div><Bounce><Heading size={4}>Thud</Heading></Bounce></div>
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <H>Physical objects help</H>
            <Notes>
              I find keeping around an object or objects that represent the brand can be extremely helpful. A few years ago 
              I was designing and building UI animations for the website of an industry advocacy group.
              
              In talking with the 
              client, they spoke about their brand wanting to feel serious, impressive, trustworthy, consistent, levelheaded. 

              They wanted users to feel assured. I was typing up notes from this meeting in this agency's machine shop, and 
              I found a large, 2 inch ball bearing. I actually have it right here. It's heavy, solid, completely smooth and 
              uniform. It was a perfect represenatation of how this brand wanted people to feel. So I kept it on my desk through 
              the whole process and would pull it out, toss it from hand to hand to get a feel of the weight, the smoothness 
              and use that in designing UI animation.
            </Notes>
          </Slide>

          <Slide>
            <H>Music works too</H>
            <Notes>
              Much like a physical object, you can use a piece of music as a touchstone. Val Head is an amazin web animator, 
              and she's a big fan of using a piece of music as a touchstone. Use the rhythm, form, sensations of the music 
              and use that as a reference for your animations. Work until your animations feel "right" alongside that 
              piece of music.
            </Notes>
          </Slide>

          <Slide>
            <Pic src="futurecop.jpg" />
            <Notes>
              Much like a physical object, you can use a piece of music as a touchstone. Val Head is an amazin web animator,
              and she's a big fan of using a piece of music as a touchstone. Use the rhythm, form, sensations of the music
              and use that as a reference for your animations. Work until your animations feel "right" alongside that
              piece of music.
            </Notes>
          </Slide>

          <Slide>
            <SH>Process</SH>
            <Notes>
              All of this is for naught if you can't bake animation into your web design process.
            </Notes>
          </Slide>

          <Slide>
            <H>Start early</H>
            <Notes>
              Seriously, start early. Most important advice. Animation's reputation as frivolous surprise and delight 
              is *because* it is usually an afterthought at the end, which mostly prevents using it as a core UX 
              enhancer on the cognition side, and prevents a wholistic integrated approach that you need on the emotion 
              side.
            </Notes>
          </Slide>

          <Slide>
            <Pic src="pinterest.jpg" />
            <Notes>
              If you use moodboards in your design process, collect animation inspiration as well. If this is the point 
              at which you familiarize yourself with a brand, start developing ideas of animation here as well.
            </Notes>
          </Slide>

          <Slide>
            <Pic src="luxo-storyboard.jpg" />
            <Notes>
              During wireframes, storyboards are a good complement. You don't need to do it for every animation, but for 
              important ones its a good idea.  They illustrate interstitial states and fill the gaps between wireframe 
              screens.
            </Notes>
          </Slide>

          <Slide>
            <div style={{
              display: 'flex',
            }}>
              <Vid
                src="f8-proto.mp4"
                style={{
                  width: '100%',
                }}
                wrapperStyle={{
                  width: '50%',
                  display: 'flex',
                }}
              />
              <Vid
                src="fb-trends-in-use-exp.mp4"
                style={{
                  width: '100%',
                }}
                wrapperStyle={{
                  width: '50%',
                  display: 'flex',
                }}
              />
            </div>
            <Notes>
              Once we enter the visual design stage, things become a little more variable. I usually make prototypes right 
              in code that illustrate animations and accompany visual designs, but I've seen framer.js, aftereffects, and 
              even keynote prototypes work very well. When you're prototyping animation outside of the browser, you need to 
              be careful to not fall in love with an animation that isn't feasible. At an agency gig, we did this really 
              sweet gooey reveal of a logo, but I couldn't adequately execute on combining masks and gooey filters to make 
              this happen. That gooey reveal ended up being exported as a gif, which was enormous and bad for performance, 
              because once folks fell in love with the animation, they couldn't take nope for an answer.
            </Notes>
          </Slide>

          <Slide>
            <H>Collaboration is <Stroke>essential</Stroke></H>
            <Notes>
              Collaboration is key. If you're on a team with a traditional split between front end and design, it's 
              important to work on animations together. Designers? Animation inclined FEDs often have a lot of great ideas, 
              have exposure to a lot of inspiration, and are able to iterate in code very quickly. Developers? Designers 
              often have more context as to how animations fit into the larger experience, and if they have less experience 
              building animations in code, that's actually a benefit! Designers will push you out of your comfort zone 
              because they might suggest things that aren't easily implementable but are different and incredible. Even if 
              your team isn't split like this, it's still very important to get other eyes on your animations, and to iterate 
              together. Animation is more sensitive to the details of implementation than most facets of visual design, so it's 
              important that designers and devlopers continue to partner closely throughout the process. Even if you are a 
              hybrid, as many web animation folks are, consider partnering up with a non-coding designer. The best work I've 
              ever produced was because of a great working relationship with an incredibly talented designer in Maggie Gaudean. 
              She'd push me to come up with incredible things because she didn't know "the rules". I'd be like "pff that's not 
              possible", then I'd come back an hour later being like nvm figured it out. Create a working group!
            </Notes>
          </Slide>

          <Slide>
            <H>Don't wait for permission</H>
            <Notes>
              ... because it might not come. If, like me, you struggle to get buy in for animation in design, 
              it's less productive to try to make a case and get people on board than it is to just start doing it. 
              Start making storyboards, start making prototypes, start an animation working group.
            </Notes>
          </Slide>

          <Slide>
            <SH>TLDR</SH>
            <Notes>
              in conclusion...
            </Notes>
          </Slide>

          <Slide>
            <H>With great power...</H>
            <Notes>
              With great power comes great responsibility. Don't use this for evil.
            </Notes>
          </Slide>

          <Slide>
            <H>Always have your desired<br />character in mind</H>
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <H>Nobody's gonna do this for you</H>
            <Notes>

            </Notes>
          </Slide>

          {/* <Slide>
            <H>Animation is all about the <Stroke>user</Stroke></H>
            <Notes>

            </Notes>
          </Slide> */}

          <Slide>
            <H>Don't let em get ya down.</H>
            <Fade><H>Persist.</H></Fade>
            <Notes>
              Animation is important and valid way of communicating that leans on decades of scientific research. Don't
              let somebody tell you that animation is a frivolity to be dismissed. That's no more true of animation
              than it is of typefaces.
            </Notes>
          </Slide>

          <Slide>
            <H>No brand is "too serious"</H>
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <PapyrusSlide />
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <Pic src="avatar-logo.jpg" />
            <Notes>

            </Notes>
          </Slide>

          <Slide bgColor="transparent">
            <ThankYouSlide />
            <CallFn fn={this.enableConfetti} />
            <CallFn fn={this.shootConfetti} />
            <CallFn fn={this.stopConfetti} />
            <Fade><LinkHeading href="http://assets.eli.wtf/talks/animation-talk-webu-2018">http://assets.eli.wtf/talks/animation-talk-webu-2018</LinkHeading></Fade>
            <CallFn fn={this.showSocialPoiner} />
          </Slide>

        </Deck>
        <Confetti
          enableConfetti={this.state.enableConfetti}
          shootConfetti={this.state.fireConfetti}
        />
        <Footer
          showSocialPoiner={this.state.showSocialPointer}
        />
      </div>
    );
  }
}
