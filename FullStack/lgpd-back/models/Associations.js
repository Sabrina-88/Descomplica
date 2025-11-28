// oquee tem de relacionamentos da tabela

import User from './User.js';
import Teacher from './Teacher.js';
import Course from './Course.js';
import Evaluate from './Evaluate.js';

const associations = () => {
    Course.hasMany(Teacher);
    User.hasMany(Evaluate);
    Course.hasMany(Evaluate);
}

const factory = {
    associations
}

export default factory;