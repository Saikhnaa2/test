export const Fail = async (req, res) => {
    return res.status(200).json({
        success: false,
    });
};
