import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';

const rangeAtom = atomWithReset(1);

export const useRangeAtom = () => useAtom(rangeAtom);

export const useRangeAtomValue = () => useAtomValue(rangeAtom);

export const useSetRangeAtomValue = () => useSetAtom(rangeAtom);

export const useResetRangeAtomValue = () => useResetAtom(rangeAtom);
