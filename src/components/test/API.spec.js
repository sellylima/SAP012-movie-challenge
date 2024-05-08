// import App from './API.js';
import { receiveFilms , detailsFilms } from './API.js';
import { mockdata1, mockdata2, mockdata3 } from '../mockdata.spec.js';

jest.mock('./API.js', () => ({
    receiveFilms: jest.fn(() => Promise.resolve(mockdata1.results)),
    detailsFilms: jest.fn(() => Promise.resolve(mockdata2.results)),
}));

describe('receiveFilmes', () => {

});
