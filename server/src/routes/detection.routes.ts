import express from 'express';
import { Detection } from '../models/detection.model';
import { auth } from '../middleware/auth.middleware';

const router = express.Router();

// Get user's detection history
router.get('/history', auth, async (req: any, res) => {
  try {
    const detections = await Detection.find({ user: req.user._id })
      .sort({ createdAt: -1 });
    res.json(detections);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching detection history' });
  }
});

// Get single detection result
router.get('/:id', auth, async (req: any, res) => {
  try {
    const detection = await Detection.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!detection) {
      return res.status(404).json({ message: 'Detection result not found' });
    }

    res.json(detection);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching detection result' });
  }
});

// Create new detection
router.post('/', auth, async (req: any, res) => {
  try {
    const { imageUrl, result } = req.body;

    const detection = new Detection({
      user: req.user._id,
      imageUrl,
      result
    });

    await detection.save();
    res.status(201).json(detection);
  } catch (error) {
    res.status(500).json({ message: 'Error creating detection' });
  }
});

// Delete detection
router.delete('/:id', auth, async (req: any, res) => {
  try {
    const detection = await Detection.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!detection) {
      return res.status(404).json({ message: 'Detection result not found' });
    }

    await detection.deleteOne();
    res.json({ message: 'Detection result deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting detection result' });
  }
});

export default router; 