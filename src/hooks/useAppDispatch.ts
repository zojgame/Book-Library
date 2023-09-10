import { ApiDispatch } from '../types';
import { useDispatch } from 'react-redux'

const useAppDispatch = () => useDispatch<ApiDispatch>();

export { useAppDispatch }