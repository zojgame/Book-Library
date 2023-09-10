import { useMemo } from "react";
import { useAppDispatch } from ".";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actions } from "../store";
import * as asyncActions from "../asyncActions";

const rootActions = {
    ...actions,
    ...asyncActions
}

const useActions = () => {
    const dispatch = useAppDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
};

export { useActions }