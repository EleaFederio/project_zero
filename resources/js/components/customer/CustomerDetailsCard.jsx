import React from "react";
import {Card, CardHeader} from "@mui/material";
import {AssignmentInd} from "@mui/icons-material";

const CustomerDetailsCard = () => {
    return(
        <Card>
            <CardHeader
                avatar={
                    <AssignmentInd
                        color={'primary'}
                    />
                }
                title={'Customer Details'}
            />
        </Card>
    )
}

export default  CustomerDetailsCard
