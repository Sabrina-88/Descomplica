import EvaluateRepository from  "../repositories/EvaluateRepository";


const saveEvaluate = (evaluateModel) => {
    return EvaluateRepository.saveEvaluate(evaluateModel);
}

const getEvaluateById = (id) => {
    return EvaluateRepository.getEvaluateById(id);
}

const getAllEvaluates = () => {
    return EvaluateRepository.getAllEvaluates();
}


const deletetEvaluateById = (id) => {
    return EvaluateRepository.deleteEvaluateById(id);
}

const updatetEvaluateById = (id, evaluateModel) => {
    return EvaluateRepository.updateEvaluateById(id, evaluateModel);
}
const service = {
saveEvaluate,
getEvaluateById,
getAllEvaluates,
deletetEvaluateById,
updatetEvaluateById
};

export default service;