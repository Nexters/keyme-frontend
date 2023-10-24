import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';

const rangeAtom = atomWithReset<number>(3);

export const useRangeAtom = () => useAtom(rangeAtom);

export const useRangeAtomValue = () => useAtomValue(rangeAtom);

export const useSetRangeAtom = () => useSetAtom(rangeAtom);

export const useResetRangeAtom = () => useResetAtom(rangeAtom);
