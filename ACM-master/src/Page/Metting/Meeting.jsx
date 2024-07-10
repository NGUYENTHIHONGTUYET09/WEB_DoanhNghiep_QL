import Flatpickr from "react-flatpickr";
import { useRef, useEffect } from "react";
import { Container, Title, Action, Content, Result } from "./Metting.styled";
import { Table, Button } from "antd";
import { useFetchRooms } from "../../Hooks/Meeting/useFetchRooms";
import { Loading } from "../Loading";
import { Error } from "../Error";
import { useMeetingStore } from "../../Context/meetingStore";
import { useFetchBookingRooms } from "../../Hooks/Meeting/useFetchBookingRoom";
import { v4 as uuidv4 } from 'uuid';
import { createBookingRoom } from "../../services/meetingService";
import { useAuth } from "../../Context/Auth.context";
import { deleteBookingRoom } from "../../services/meetingService";
import 'flatpickr/dist/flatpickr.min.css'; 

const Meeting = () => {

    return (
        <Container>
            <Title>Meeting room</Title>
            <Content>
                <ActionContainer />
                <ResultContainer />
            </Content>
        </Container>
    );
}

const ActionContainer = () => {
    const { date, setDate, setRoom, room: selectedRoom, setRooms } = useMeetingStore();
    const { rooms, loading, error } = useFetchRooms();
    const fp = useRef(null);

    const handleChooseDate = (date) => {
        setDate(date[0])
    }
    const handleRoomClick = (room) => {
        setRoom(room)
    }

    useEffect(() => {
        if (rooms && rooms.length > 0) {
            setRooms(rooms);
            setRoom(rooms[0].name);
        }
    }, [rooms, setRooms, setRoom]);

    if (loading) return <Loading></Loading>
    if (error) return <Error error={error}></Error>

    return (
        <Action>
            <div className="calendar">
                <div className="action-title">Select Date</div>
                <div className="flat-picker-wrapper">
                    <Flatpickr
                        ref={fp}
                        options={{
                            mode: "single",
                            inline: true
                        }}
                        value={date}
                        onChange={handleChooseDate}
                    />
                </div>
            </div>
            <div className="room">
                <div className="room-title">Select Room</div>
                {
                    rooms && rooms.length > 0 ? (
                        rooms.map((value, index) => {
                            const isSelected = value.name === selectedRoom;
                            return (
                                <div
                                    className={`room-element ${isSelected ? 'selected' : ''}`}
                                    key={value.id}
                                    onClick={() => handleRoomClick(value.name)}
                                >
                                    <div className="element-order">{index + 1}.</div>
                                    <div className="element-content">{value.name}</div>
                                </div>
                            )
                        })
                    ) : (
                        <div>No rooms available</div>
                    )
                }
            </div>
        </Action>
    )
}


const ResultContainer = () => {
    const { date, room } = useMeetingStore();
    const { bookingRooms, bookingRoomsLoading, bookingRoomsError } = useFetchBookingRooms(date, room);
    const { user } = useAuth();
    if (bookingRoomsLoading) return <Loading />;
    if (bookingRoomsError) return <Error error={bookingRoomsError} />;

    const handleBookClick = async (record) => {
        const data = {
            employee: user.employee_id,
            room: room,
            timeslot: record.time,
            date: date
        }
        await createBookingRoom(data)
    }

    const handleBookCancel = async (record) => {
        await deleteBookingRoom(record.id)
    }

    const columns = [
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
            width: "auto",
            render: (text) => (
                <span style={{ fontFamily: 'Poppins', fontSize: "1.5em", lineHeight: "3em" }}>
                    {text}
                </span>
            ),
        },
        {
            title: 'ID',
            dataIndex: 'employee_id',
            key: 'employee_id',
            width: "auto",
            render: (text) => (
                <span style={{ fontFamily: 'Poppins', fontSize: "1.5em", lineHeight: "3em" }}>
                    {text}
                </span>
            ),
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: "auto",
            render: (text) => (
                <span style={{ fontFamily: 'Poppins', fontSize: "1.5em", lineHeight: "3em" }}>
                    {text}
                </span>
            ),
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            width: "auto",
            render: (text) => (
                <span style={{ fontFamily: 'Poppins', fontSize: "1.5em", lineHeight: "3em" }}>
                    {text}
                </span>
            ),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: "auto",
            render: (text) => (
                <span style={{ fontFamily: 'Poppins', color: text === 'Free' ? 'green' : 'red', fontSize: "1.5em", lineHeight: "3em" }}>
                    {text}
                </span>
            ),
        },
        {
            title: 'Book',
            dataIndex: 'Book',
            key: 'Book',
            width: "auto",
            render: (text, record) => (
                record.status === 'Free' ?
                    <Button style={{ fontFamily: 'Poppins' }} onClick={() => handleBookClick(record)}>
                        Book
                    </Button>
                    : record.employee_id === user.employee_id ?
                        <Button onClick={() => handleBookCancel(record)}>Cancel</Button>
                        : null
            ),
        },
    ];

    return (
        <Result>
            <Table
                dataSource={bookingRooms.map(item => ({ ...item, key: item.id || uuidv4() }))}
                columns={columns}
            />
        </Result>
    );
}

export default Meeting;
