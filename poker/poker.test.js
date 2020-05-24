const PokerHand = require('./pokerHand.js')
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
        expect(dealHands(dealHands,stockCount))

    })

    test("check two of a kind",() => {

    })

    test("check heart bigger than spade",() => {

    })

    test("equal points for same hand",() => {
        expect(compareHands(hand1,hand2))
            .toEqual({ hand1WinPercentage: "50",hand2WinPercentage })
    })

    test("diamond smallest of all",() => {
        expect(compareDiamond(diamond,club,spade,hearts)).toEqual({diamond})

    })

   


})
