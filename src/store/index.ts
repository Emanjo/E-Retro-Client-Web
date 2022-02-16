import CardItemVoteModel from "@/models/CardItemVoteModel";
import ArrayUtilities from "@/Utilities/ArrayUtilities";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    votesGiven: [],
    maximumNumberOfVotesToGive: 5,
  },
  mutations: {
    addVoteGiven(state: any, id: string): boolean {
      const indexOfElement =  (state.votesGiven as CardItemVoteModel[]).findIndex(item => item.id == id)

      if(indexOfElement < 0) {
        state.votesGiven.push({id: id, votes: 1});
        return true;
      }

      const itemInState = (state.votesGiven as CardItemVoteModel[])[indexOfElement];

      itemInState.votes += 1;

      return true;
    },
    removeVoteGiven(state: any, id: string): boolean {
      const indexOfElement =  (state.votesGiven as CardItemVoteModel[]).findIndex(item => item.id == id)

      if(indexOfElement < 0) {
        state.votesGiven.push({id: id, votes: -1});
        return false;
      }

      const itemInState = (state.votesGiven as CardItemVoteModel[])[indexOfElement];

      itemInState.votes -= 1;

      return true;
    },
    removeVotes(state, id: string): void {

      const indexOfElement =  (state.votesGiven as CardItemVoteModel[]).findIndex(item => item.id == id)

      if(indexOfElement < 0) {
        return ;
      }

      (state.votesGiven as CardItemVoteModel[]).splice(indexOfElement, 1);
    }
  },
  getters: {
    getExistingVotesForItem: (state) => (id: string): CardItemVoteModel[] => {
      return (state.votesGiven as CardItemVoteModel[]).filter(votes => votes.id === id);
    },
    getNumberOfVotesGiven(state: any): number {
      const votesInPositiveNumbers = (state.votesGiven as CardItemVoteModel[]).map(item => Math.abs(item.votes));

      return ArrayUtilities.Sum(votesInPositiveNumbers);
    }
  },
  actions: {},
  modules: {},
});
