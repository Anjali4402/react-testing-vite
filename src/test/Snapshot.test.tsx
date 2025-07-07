import { render } from "@testing-library/react"
import SnapshotTesting from "../components/SnapshotTesting"


test('snapshot for app component', ()=>{
    const container = render(<SnapshotTesting />);
    expect(container).toMatchSnapshot();
})