import { create } from "zustand";

export const useCameraStore = create((set) => ({
  CameraStreams: [],
  addToCameraStreams: (newCameraStreams) => set((state) => ({ CameraStreams: [...state.CameraStreams, newCameraStreams] })),
  removeFromCameraStreams: (idToDelete) => set((state) => ({ CameraStreams: state.CameraStreams.filter(item => item.id !== idToDelete) })),
  clearCameraStream: () => set( { CameraStreams: [] }),
}));
