import { connect } from "react-redux";
import { Dispatch } from "redux";
import { TDispatchProps, TStateProps } from "../../common/typings";
import { Action, State } from "../App/App";
import { click } from "./action";
import { IMainProps, Main } from "./Main";

interface IOwnProps {
  message: string;
}

type StateProps = TStateProps<IMainProps, IOwnProps>;
type DispatchProps = TDispatchProps<IMainProps, IOwnProps>;

const mapStateToProps = (state: State, ownProps: IOwnProps): StateProps => {
  return {
    message2: ownProps.message + "2",
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
