import { connect } from "react-redux";
import { Main, IMainProps } from "./Main";
import { Action, State } from "../App/App";
import { Dispatch } from "redux";
import { click } from "./action";
import { TDispatchProps, TStateProps } from "../../common/typings";

interface OwnProps {}

type StateProps = TStateProps<IMainProps, OwnProps>;
type DispatchProps = TDispatchProps<IMainProps, OwnProps>;

const mapStateToProps = (state: State, ownProps: OwnProps): StateProps => {
  return {
    route: state.router.pathname as string
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => {
  return {
    click: () => {
      dispatch(click());
    }
  };
};

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
