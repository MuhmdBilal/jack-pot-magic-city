import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const data = [
    {
      question: 'What is JackpotMagickCity.io?',
      answer: 'JackpotMagickCity.io is a revolutionary online gaming platform that empowers players by collectively becoming the house. It operates on a decentralized model, offering transparent, community-driven, and fair game play experiences.',
    },
    {
      question: 'How does JackpotMagickCity.io work?',
      answer: 'Players participate in games and contribute to the liquidity pool. 100% of losing wagers go to the liquidity pool, ensuring substantial jackpot payouts at a more frequent rate. Token burns on every bet contribute to the deflationary nature of the platform.',
    },
    {
      question: 'What is the Jackpot Kitty launch?',
      answer: 'The Jackpot Kitty launch is a special event where participants secure JAM tokens in advance. 100% of Pulse chain raised on launch day are used for Jackpot payouts, liquidity and initial advertising push ensuring an exciting start.',
    },
    {
      question: "How can I participate in the Jackpot Kitty launch?",
      answer: "Details on participating in the Jackpot Kitty launch will be available on our platform. Stay tuned to our official channels for announcements and instructions."
    }
    ,
    {
      question: "How are Jackpot payouts determined?",
      answer: "Jackpot payouts are fueled by 100% of losing wagers contributed to the liquidity pool. The larger the liquidity pool, the more significant the potential jackpots."
    }
    ,
    {
      question: "Are the games fair on JackpotMagickCity.io?",
      answer: "Absolutely. The platform uses provably fair RNG technology, ensuring transparency and fairness in every game."
    }
    ,
    {
      question: "How often are token burns executed?",
      answer: "Token burns occur regularly with every bet, creating scarcity and increasing the value of JAM tokens over time."
    }
    ,
    {
      question: "What makes JackpotMagickCity.io different from traditional casinos?",
      answer: "JackpotMagickCity.io is community-driven, transparent, and fair. It disrupts traditional casino models by empowering players to collectively become the house."
    }
    ,
    {
      question: "Is JackpotMagickCity.io regulated?",
      answer: "JackpotMagickCity.io operates on a decentralized model, and while it prioritizes fairness and security, users should be aware of the decentralized nature of the platform."
    }
    ,
    {
      question: "What is the significance of Pulse chain in JackpotMagickCity.io?",
      answer: "Pulse chain's ultra-low fees enhance the platform's capabilities, allowing for frequent jackpots and a more seamless gaming experience."
    }
    ,
    {
      question: "Can I use traditional currencies on JackpotMagickCity.io?",
      answer: "The platform primarily operates using JAM tokens. Users can acquire tokens through the Jackpot Kitty launch or through decentralized exchanges."
    }
    ,
    {
      question: "How is my privacy protected on JackpotMagickCity.io?",
      answer: "The platform values user privacy. Transactions on the blockchain are pseudonymous, ensuring a degree of privacy for users."
    }
    ,
    {
      question: "What is the benefit of the deflationary model?",
      answer: "The deflationary model, with regular token burns, aims to increase the scarcity of JAM tokens, positively impacting their long-term value."
    }
    ,
    {
      question: "How are JackpotMagick (JAM) tokens listed on exchanges?",
      answer: "JAM tokens will be listed on the PulseX decentralized Exchange enhancing liquidity and accessibility."
    }
    ,
    {
      question: "What happens if I lose my tokens in the Jackpot Kitty launch?",
      answer: "The Jackpot Kitty launch ensures that participants receive JAM tokens, securing their place in the platform. Losses may occur during gameplay but contribute to the liquidity pool for potential jackpot payouts."
    }
    ,
    {
      question: "How can I stay updated on JackpotMagickCity.io developments?",
      answer: "Follow our official channels on Twitter and Telegram for the latest announcements, updates, and community discussions."
    }
  ];
  return (
    <div>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-10'>
            <h2 className='gradientText'>FREQUENTLY ASKED QUESTIONS</h2>
            <div className="boxaccordion">
              <div className="containerwidth">
                {data.map((item, index) => (
                  <div className="wrapper" key={index}>
                    <button className="toggle" onClick={() => toggleAccordion(index)}>
                      {item.question}
                      <FontAwesomeIcon icon={activeIndex === index ? faMinus : faPlus} className="icon" />
                    </button>
                    <div className="content" style={{ height: activeIndex === index ? 'auto' : 0 }}>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq