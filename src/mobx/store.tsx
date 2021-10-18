import { action, makeObservable, observable } from "mobx";
import { createContext } from "react";
import { SimpleType } from "../model/stewards.interface";

export class RootStore {
  private baseUrl = "./data.json";
  public steward: SimpleType = [];
  public oldSteward = [...this.steward];
  public filtedName = "";

  constructor() {
    makeObservable(this, {
      steward: observable,
      oldSteward: observable,
      filtedName: observable,
      loadSteward: action,
      changeFilterName: action,
    });
    this.loadSteward();
  }

  loadSteward = async (): Promise<void> => {
    const res = await fetch(`${this.baseUrl}`);
    if (res.ok) {
      this.steward = await res.json();
      this.oldSteward = [...this.steward];
    }
  };

  changeFilterName = (name: string) => {
    this.filtedName = name;
    this.steward= [...this.oldSteward];

    const awesomeSort = (key: string) => {
      this.steward.sort((a, b) => {
        if (a[key] > b[key]) {
          return -1;
        }

        if (a[key] < b[key]) {
          return 1;
        }

        return 0;
      });
    };

    switch (this.filtedName) {
      case "Overall health":
        awesomeSort("health");
        break;

      case "Steward Age":
        this.steward.sort((a, b) => {
          if (a.steward_since > b.steward_since) {
            return 1;
          }
          if (a.steward_since < b.steward_since) {
            return -1;
          }
          return 0;
        });
        break;

      case "Forum Post":
        awesomeSort("posts");
        break;

      case "Delegators":
        awesomeSort("participation_tally");
        break;

      case "Voting Power":
        awesomeSort("votingweight");
        break;

      case "Vote participation":
        awesomeSort("participation_snapshot");
        break;

      default:
        this.steward = this.oldSteward;
        break;
    }
  };
}

const store = new RootStore();

export default createContext(store);
