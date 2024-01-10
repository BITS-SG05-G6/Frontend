import axiosInstance from "./axios";


// Create saving goal 
export const createSavingGoal = async (name, target,  color, startDate, endDate, description, status) => {
    try {
        const res = await axiosInstance.post("/saving/create", { name, target,  color, startDate, endDate, description, status });
        if (res.status === 200) {
            return res.data;
        }
    }
    catch (err) {
        return err;
    }
};

// View all saving goals
export const viewSavingGoals = async () => {
    try {
        const res = await axiosInstance.get('/saving/view');
        if (res.status === 200) {
            return res.data;
        }
    }
    catch (err) {
        return err;
    }
}

// View a saving goal's details
export const viewSavingGoal = async(id) => {
    try {
        const res = await axiosInstance.get(`/saving/view/${id}`);
        if (res.status === 200) {
            return res.data;
        }
    }
    catch (err) {
        return err;
    }
}

// Delete a saving goal
export const deleteSavingGoal = async(id) => {
    try {
        const res = await axiosInstance.delete(`/saving/${id}/delete`);
        if (res.status === 200) {
            return res.data;
        }
    }
    catch (err) {
        return err;
    }
}

// Update a saving goal
export const updateSavingGoal = async(id, newData) => {
    try {
        const res = await axiosInstance.put(`/saving/${id}/update`, {data: newData});
        if (res.status === 200) {
            return res.data;
        }
    }
    catch (err) {
        return err;
    }
}

// Update a saving goal status
export const updateStatus = async(id, newStatus) => {
    try {
        const res = await axiosInstance.put(`/saving/${id}/status`, {status: newStatus});
        if (res.status === 200) {
            return res.data;
        }
    }
    catch (err) {
        return err;
    }
}


