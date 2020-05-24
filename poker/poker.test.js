const PokerHand = require('./poker.js')
const p = new PokerHand()

describe("testing the poker hand key logic functions",() => {

    test("full house",() => {
        const hand = ['5D','6D']
        const deck = ['5C','5S','6H','KH']
        const pokerHand = new PokerHand(hand,deck)
        expect(pokerHand.isFullHouse()).toEqual(true)
    })


    test("check burning of cards will equal number of cards in deck",() => {
        const deck = ['5C','5S','6H','KH','AH',"2H","3S"]
        const cardsInDeckRemaining =
            expect(dealHands(dealHands,stockCount)).toEqual(stockCount - 1)
    })

    test("card algorithm hierachy",() => {
        expect(dealHands(dealHands,stockCount)).toEqual()

    })

    test("equal points for same hand",() => {
        expect(compareHands(hand1,hand2))
            .toEqual({ hand1WinPercentage: "50",hand2WinPercentage })
    })

    test("check three of a kind",() => {
        const hand = ['3D','4S']
        const deck = ['10D','5C','3S','AD','3C']
        const pokerHand = new PokerHand(hand,deck)
        expect(pokerHand.isthreeOfaKind()).toEqual(true)

    })

    

    test("Check for Royal flush",() => {
        const hand = ['AS','KS']
        const deck = ['10S','5C','QS','JS','3C']
        const pokerHand = new PokerHand(hand,deck)
        expect(pokerHand.royalFlush()).toEqual(true)

    })

    test("Check for flush",() => {
        const hand = ['3H','4S']
        const deck = ['10H','5C','5H','JH','9H']
        const pokerHand = new PokerHand(hand,deck)
        expect(pokerHand.flush()).toEqual(true)

    })



    test("check for Straight",() => {
        const hand = ['3D','4S']
        const deck = ['10D','5C','6S','AD','7C']
        const pokerHand = new PokerHand(hand,deck)
        expect(pokerHand.Straight()).toEqual(true)

    })

    test("check for Straight Flush",() => {

        const hand = ['3D','4S']
        const deck = ['10D','5C','3S','AD','3C']
        const pokerHand = new PokerHand(hand,deck)
        expect(pokerHand.StraightFlush()).toEqual(true)
    })

    test("check for Straight Flush with a specific type",() => {
        const hand = ['5D','4S']
        const deck = ['9D','6D','3S','7D','8D']
        const pokerHand = new PokerHand(hand,deck)
        expect(pokerHand.StraightFlush(suit)()).toEqual(true)

    })

    test("check for a pair",() => {
        const hand = ['3D','AD']
        const deck = ['10D','5C','7S','AS','2C']
        const pokerHand = new PokerHand(hand,deck)
        expect(pokerHand.pair()).toEqual(true)

    })


    
    test("check heart bigger than spade",() => 
    {
        
        
    })
    

    test("check diamond is the smallest of all",() => {
        expect(compareDiamond(Diamond,Suit))
            .toEqual({true})

    })



    


})
