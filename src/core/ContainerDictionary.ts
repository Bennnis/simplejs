import SimpleNativeComponent from "./SimpleNativeComponent";
import throwIf from "../loggers/throwIf";
import {componentKey} from "../statics/injectionKey";

let containerMaps: any = {}

let rootIdCounter: number = 0

export const registerContainer = (rootContainer: any) => {
    const rootId = ++rootIdCounter

    rootContainer.setAttribute(componentKey, rootId)

    containerMaps[rootId] = {
        _rootId: rootId,
        _root: rootContainer
    }
}

export const cancelContainer = (selector: string) => {
    delete containerMaps[selector]
}

export const getContainerByRootId = (rootId: string) => {
    return containerMaps[rootId]
}

/**
 * A dictionary for the convenience of the basic routine
 * */
const ContainerDictionary = {
    registerContainer: registerContainer,
    cancelContainer: cancelContainer,
    getContainerByRootId: getContainerByRootId
}

export default ContainerDictionary