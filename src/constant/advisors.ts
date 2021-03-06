import { Advisor } from 'models/advisor.model'
import thitruong from 'assets/images/advisor/thi-truong.png'
import eric from 'assets/images/advisor/eric.png'
import larry from 'assets/images/advisor/larry.png'

export const DEFAULT_ADVISOR: Advisor[] = [
  {
    avatar: thitruong,
    name: 'Thi Truong',
    desc: `Mr. Thi, the co-founder, and CEO of Icetea Labs and Polka Foundry
             & RedKite. He is also the mind behind Faraland, GameFi, and a dozen of 
             other successful blockchain projects. With his enormous help in providing 
             guidance and strategic advice and build valuable connections, Planet Sandbox is growing fast every day.`,
  },
  {
    avatar: eric,
    name: 'Eric',
    desc: `Mr.Eric — CEO of Exnetwork Capital — a hyperconnected 
            early-stage fund/incubator has over 10 active communities centered around
            various crypto and a global footprint with connections in all the major 
            continents for maximum strategic value.`,
  },
  {
    avatar: larry,
    name: 'Larry',
    desc: `Larry is the founder of Basics Capital. He has over
            5 years of experience in the blockchain industry and has
            led investments in hundreds of projects. He is also the advisor 
            of Arche Protocol, BSCstation, Fintropy, and KnightWar among others`,
  },
]
