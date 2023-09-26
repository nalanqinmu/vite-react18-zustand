import useDelayedValue from "../../hooks/useDelayedValue";
import usePointerPosition from "../../hooks/usePointerPosition";
import { useGlobalStore } from "@/stores"
export default function Cursors() {
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 100);
  const pos3 = useDelayedValue(pos2, 100);
  const pos4 = useDelayedValue(pos3, 100);
  const pos5 = useDelayedValue(pos4, 100);
  const pos6 = useDelayedValue(pos5, 100);
  const pos7 = useDelayedValue(pos6, 100);
  const pos8 = useDelayedValue(pos7, 50);
  const pos9 = useDelayedValue(pos8, 50);
  const pos10 = useDelayedValue(pos9, 50);
  return (
    <>
      <Dot position={pos1} opacity={1}></Dot>
      <Dot position={pos2} opacity={0.8}></Dot>
      <Dot position={pos3} opacity={0.6}></Dot>
      <Dot position={pos4} opacity={0.4}></Dot>
      <Dot position={pos5} opacity={0.2}></Dot>
      <Dot position={pos6} opacity={0.1}></Dot>
      <Dot position={pos7} opacity={0.05}></Dot>
      <Dot position={pos8} opacity={0.01}></Dot>
      <Dot position={pos9} opacity={0}></Dot>
      <Dot position={pos10} opacity={0}></Dot>
    </>
  )
}


// 点图
function Dot({ position, opacity }) {
  const { primaryColor } = useGlobalStore();
  return (
    <div style={{
      position: 'absolute',
      background: primaryColor,
      borderRadius: '50%',
      opacity,
      transform: `translate(${position.x}px, ${position.y}px)`,
      left: 0,
      top: 0,
      width: '30px',
      height: '30px',
    }}></div>
  )
}